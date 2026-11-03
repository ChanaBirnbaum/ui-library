import { jsx as _jsx } from "react/jsx-runtime";
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, createTheme } from '@mui/material';
import { IpsFileUploadMobile } from './IpsFileUploadMobile';
const muiTheme = createTheme();
const UPLOADED_PATH = '/sites/aviv/approval.pdf';
function renderComponent(props = {}) {
    return render(_jsx(ThemeProvider, { theme: muiTheme, children: _jsx(IpsFileUploadMobile, { sviva: "dev", system: "aviv", ...props }) }));
}
function chooseFile(container, file) {
    const input = container.querySelector('input[type="file"]');
    fireEvent.change(input, { target: { files: [file] } });
}
const pdfFile = (sizeBytes = 100) => new File(['x'.repeat(sizeBytes)], 'approval.pdf', { type: 'application/pdf' });
describe('IpsFileUploadMobile', () => {
    const originalFetch = global.fetch;
    beforeEach(() => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: async () => ({ path: UPLOADED_PATH }),
        });
    });
    afterEach(() => {
        global.fetch = originalFetch;
    });
    test('shows a field with the placeholder and no drop zone', () => {
        const { container } = renderComponent({ placeholder: 'בחירת קובץ' });
        expect(screen.getByRole('button', { name: 'בחירת קובץ' })).toBeInTheDocument();
        expect(container.querySelector('.ips-drop-zone')).not.toBeInTheDocument();
    });
    test('uploads a chosen file at once, through the same upload flow as IpsFileUpload', async () => {
        const onBeforeSave = jest.fn().mockResolvedValue(true);
        const onSaveSuccess = jest.fn();
        const { container } = renderComponent({ onBeforeSave, onSaveSuccess });
        chooseFile(container, pdfFile());
        await waitFor(() => expect(onSaveSuccess).toHaveBeenCalledWith([{ name: 'approval.pdf', path: UPLOADED_PATH }]));
        expect(onBeforeSave).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledTimes(1);
    });
    test('reports a failed upload', async () => {
        global.fetch = jest.fn().mockResolvedValue({ ok: false, statusText: 'Server Error' });
        const onSaveError = jest.fn();
        const { container } = renderComponent({ onSaveError });
        chooseFile(container, pdfFile());
        await waitFor(() => expect(onSaveError).toHaveBeenCalledTimes(1));
    });
    test('shows a size error and does not upload a file that is too large', async () => {
        const { container } = renderComponent({ maxFileSizeMB: 0.00001 });
        chooseFile(container, pdfFile(1000));
        expect(await screen.findByRole('alert')).toHaveTextContent('הקובץ חורג מהגודל המותר');
        expect(global.fetch).not.toHaveBeenCalled();
    });
    test('shows the camera button only when camera is set', () => {
        renderComponent();
        expect(screen.queryByRole('button', { name: 'מצלמה' })).not.toBeInTheDocument();
    });
    test('the camera button opens the same camera dialog as IpsFileUpload', async () => {
        renderComponent({ camera: true });
        await userEvent.click(screen.getByRole('button', { name: 'מצלמה' }));
        expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
    test('disables the field and the camera button', () => {
        renderComponent({ camera: true, disabled: true, placeholder: 'בחירת קובץ' });
        expect(screen.getByRole('button', { name: 'בחירת קובץ' })).toBeDisabled();
        expect(screen.getByRole('button', { name: 'מצלמה' })).toBeDisabled();
    });
});
