import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, createTheme } from '@mui/material';
import { IpsMenu } from './IpsMenu';
const muiTheme = createTheme();
const ITEMS = [
    { value: 'restriction', label: 'Restriction' },
    { value: 'message', label: 'Message', disabled: true },
    { value: 'all', label: 'All actions', dividerBefore: true },
];
function renderMenu(props = {}) {
    return render(_jsx(ThemeProvider, { theme: muiTheme, children: _jsx(IpsMenu, { icon: _jsx("span", { children: "\u22EE" }), label: "Actions for Dana", items: ITEMS, onSelect: () => { }, ...props }) }));
}
describe('IpsMenu', () => {
    test('renders a closed menu button with its accessible name', () => {
        renderMenu();
        const trigger = screen.getByRole('button', { name: 'Actions for Dana' });
        expect(trigger).toHaveAttribute('aria-haspopup', 'menu');
        expect(trigger).not.toHaveAttribute('aria-expanded');
        expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });
    test('opens a menu named by the trigger, with one item per entry and a divider', async () => {
        renderMenu();
        const trigger = screen.getByRole('button', { name: 'Actions for Dana' });
        await userEvent.click(trigger);
        const menu = screen.getByRole('menu', { name: 'Actions for Dana' });
        expect(trigger).toHaveAttribute('aria-expanded', 'true');
        expect(trigger).toHaveAttribute('aria-controls', menu.id);
        expect(screen.getAllByRole('menuitem')).toHaveLength(3);
        expect(screen.getByRole('separator')).toBeInTheDocument();
    });
    test('reports the chosen value after the menu closed and focus returned to the trigger', async () => {
        const onSelect = jest.fn();
        renderMenu({ onSelect });
        const trigger = screen.getByRole('button', { name: 'Actions for Dana' });
        await userEvent.click(trigger);
        await userEvent.click(screen.getByRole('menuitem', { name: 'All actions' }));
        await waitFor(() => expect(onSelect).toHaveBeenCalledWith('all'));
        expect(onSelect).toHaveBeenCalledTimes(1);
        expect(trigger).toHaveFocus();
        expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });
    test('a disabled item cannot be chosen', async () => {
        renderMenu();
        await userEvent.click(screen.getByRole('button', { name: 'Actions for Dana' }));
        expect(screen.getByRole('menuitem', { name: 'Message' })).toHaveAttribute('aria-disabled', 'true');
    });
    test('Escape closes the menu without choosing', async () => {
        const onSelect = jest.fn();
        renderMenu({ onSelect });
        const trigger = screen.getByRole('button', { name: 'Actions for Dana' });
        await userEvent.click(trigger);
        await userEvent.keyboard('{Escape}');
        await waitFor(() => expect(screen.queryByRole('menu')).not.toBeInTheDocument());
        expect(onSelect).not.toHaveBeenCalled();
        expect(trigger).toHaveFocus();
    });
});
