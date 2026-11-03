import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, createTheme } from '@mui/material';
import { IpsRadioGroupMobile } from './IpsRadioGroupMobile';
const muiTheme = createTheme();
const OPTIONS = [
    { label: 'Full', value: 'full' },
    { label: 'Limited', value: 'limited' },
];
function ControlledGroup(props) {
    const [value, setValue] = useState(props.value ?? 'full');
    return (_jsx(IpsRadioGroupMobile, { "aria-label": "Limit type", options: OPTIONS, ...props, value: value, onChange: (next) => {
            setValue(next);
            props.onChange?.(next);
        } }));
}
function renderGroup(props = {}) {
    return render(_jsx(ThemeProvider, { theme: muiTheme, children: _jsx(ControlledGroup, { ...props }) }));
}
describe('IpsRadioGroupMobile', () => {
    test('renders a named radio group with one native radio per option', () => {
        renderGroup();
        expect(screen.getByRole('radiogroup', { name: 'Limit type' })).toBeInTheDocument();
        expect(screen.getAllByRole('radio')).toHaveLength(2);
    });
    test('checks the selected option', () => {
        renderGroup();
        expect(screen.getByRole('radio', { name: 'Full' })).toBeChecked();
        expect(screen.getByRole('radio', { name: 'Limited' })).not.toBeChecked();
    });
    test('reports the original value when an option is chosen', async () => {
        const onChange = jest.fn();
        renderGroup({ onChange });
        await userEvent.click(screen.getByText('Limited'));
        expect(onChange).toHaveBeenCalledWith('limited');
        expect(screen.getByRole('radio', { name: 'Limited' })).toBeChecked();
    });
    test('uses a visible label as the group name', () => {
        renderGroup({ label: 'Type', 'aria-label': undefined });
        expect(screen.getByRole('radiogroup', { name: 'Type' })).toBeInTheDocument();
    });
    test('disables every option', () => {
        renderGroup({ disabled: true });
        screen.getAllByRole('radio').forEach((radio) => expect(radio).toBeDisabled());
    });
    describe('with descriptions', () => {
        const DESCRIBED_OPTIONS = [
            { label: 'Full', value: 'full', description: 'Calls are blocked' },
            { label: 'Limited', value: 'limited', description: 'Calls are capped' },
        ];
        test('names each radio by its title and describes it with its description', () => {
            renderGroup({ options: DESCRIBED_OPTIONS });
            const fullRadio = screen.getByRole('radio', { name: 'Full' });
            expect(fullRadio).toHaveAccessibleDescription('Calls are blocked');
        });
        test('chooses an option when its description is tapped', async () => {
            const onChange = jest.fn();
            renderGroup({ options: DESCRIBED_OPTIONS, onChange });
            await userEvent.click(screen.getByText('Calls are capped'));
            expect(onChange).toHaveBeenCalledWith('limited');
        });
        test('leaves options without a description unchanged', () => {
            renderGroup();
            expect(screen.getByRole('radio', { name: 'Full' })).not.toHaveAttribute('aria-describedby');
        });
    });
});
