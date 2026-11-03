import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material';
import { IpsFileUpload } from './IpsFileUpload';
const muiTheme = createTheme();
// ─── Mock fetch ───────────────────────────────────────────────────────────────
beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ path: '/sites/test/file.pdf' }),
    });
});
afterEach(() => {
    jest.resetAllMocks();
});
// ─── Helpers ──────────────────────────────────────────────────────────────────
function makeFile(name, sizeBytes, type = 'application/pdf') {
    const blob = new Blob([new Uint8Array(sizeBytes)], { type });
    return new File([blob], name, { type });
}
function renderComponent(props = {}) {
    return render(_jsx(ThemeProvider, { theme: muiTheme, children: _jsx(IpsFileUpload, { sviva: "dev", system: "test-site", ...props }) }));
}
function addFilesViaInput(container, files) {
    const input = container.querySelector('input[type="file"]');
    // jsdom does not support DataTransfer — define files directly on the input
    Object.defineProperty(input, 'files', {
        value: Object.assign([...files], {
            item: (i) => files[i] ?? null,
            length: files.length,
        }),
        configurable: true,
    });
    fireEvent.change(input);
}
// ─── Tests ────────────────────────────────────────────────────────────────────
describe('IpsFileUpload', () => {
    test('separatorLabel: not shown by default, and shown between the drop text and the buttons when given', () => {
        const { container, rerender } = renderComponent();
        expect(container.querySelector('.ips-drop-zone-separator')).toBeNull();
        rerender(_jsx(ThemeProvider, { theme: muiTheme, children: _jsx(IpsFileUpload, { sviva: "dev", system: "test-site", separatorLabel: "\u05D0\u05D5" }) }));
        const hint = container.querySelector('.ips-drop-zone-hint');
        const separator = screen.getByText('או');
        const buttons = container.querySelector('.ips-drop-zone-buttons');
        expect(hint.compareDocumentPosition(separator) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
        expect(separator.compareDocumentPosition(buttons) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    });
    test('actionsOrder: save first by default, clear first with "clear-first" (DOM and keyboard order)', () => {
        const { container, rerender } = renderComponent();
        const actionLabels = () => Array.from(container.querySelectorAll('.ips-file-upload-actions button')).map((button) => button.textContent);
        expect(actionLabels()).toEqual(['שמור קבצים', 'נקה הכל']);
        rerender(_jsx(ThemeProvider, { theme: muiTheme, children: _jsx(IpsFileUpload, { sviva: "dev", system: "test-site", actionsOrder: "clear-first" }) }));
        expect(actionLabels()).toEqual(['נקה הכל', 'שמור קבצים']);
    });
    test('1. renders without crashing', () => {
        const { container } = renderComponent();
        expect(container.querySelector('.ips-file-upload')).toBeInTheDocument();
    });
    test('2. IpsDropZone is rendered', () => {
        const { container } = renderComponent();
        expect(container.querySelector('.ips-drop-zone')).toBeInTheDocument();
    });
    test('3. camera button shown when camera=true', () => {
        renderComponent({ camera: true });
        expect(screen.getByText('מצלמה')).toBeInTheDocument();
    });
    test('4. scan button shown when scan=true', () => {
        renderComponent({ scan: true });
        expect(screen.getByText('סריקה')).toBeInTheDocument();
    });
    test('5. valid file is added to the list', () => {
        const { container } = renderComponent({ maxFileSizeMB: 10 });
        addFilesViaInput(container, [makeFile('doc.pdf', 100 * 1024)]);
        expect(container.querySelector('.ips-file-item')).toBeInTheDocument();
        expect(screen.getByText('doc.pdf')).toBeInTheDocument();
    });
    test('6. oversized file gets error state', () => {
        const { container } = renderComponent({ maxFileSizeMB: 1 });
        addFilesViaInput(container, [makeFile('big.pdf', 5 * 1024 * 1024)]);
        expect(container.querySelector('.ips-file-item')).toBeInTheDocument();
        expect(screen.getByText(/חורג מהגודל המותר/)).toBeInTheDocument();
    });
    test('7. save button disabled when no files', () => {
        renderComponent();
        const saveBtn = screen.getByText('שמור קבצים').closest('button');
        expect(saveBtn).toBeDisabled();
    });
    test('8. clearAll empties the file list', () => {
        const { container } = renderComponent({ maxFileSizeMB: 10 });
        addFilesViaInput(container, [makeFile('doc.pdf', 100 * 1024)]);
        expect(container.querySelector('.ips-file-item')).toBeInTheDocument();
        const clearBtn = screen.getByText('נקה הכל').closest('button');
        fireEvent.click(clearBtn);
        expect(container.querySelector('.ips-file-item')).not.toBeInTheDocument();
    });
    test('9. onSaveSuccess called with UploadResult[]', async () => {
        const onSaveSuccess = jest.fn();
        const { container } = renderComponent({ maxFileSizeMB: 10, onSaveSuccess });
        addFilesViaInput(container, [makeFile('doc.pdf', 100 * 1024)]);
        const saveBtn = screen.getByText('שמור קבצים').closest('button');
        await act(async () => { fireEvent.click(saveBtn); });
        await waitFor(() => {
            expect(onSaveSuccess).toHaveBeenCalledWith([
                { name: 'doc.pdf', path: '/sites/test/file.pdf' },
            ]);
        });
    });
});
