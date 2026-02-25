import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SvgIcon from '@mui/material/SvgIcon';
import { IpsIconButton } from './IpsIconButton';

const TestIcon = (props: any) => (
  <SvgIcon {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
  </SvgIcon>
);

describe('IpsIconButton', () => {
  test('renders icon button with icon', () => {
    render(<IpsIconButton icon={<TestIcon data-testid="test-icon" />} />);
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  test('applies ips-icon-button className', () => {
    const { container } = render(
      <IpsIconButton icon={<TestIcon />} data-testid="icon-button" />
    );
    const button = container.querySelector('button');
    expect(button).toHaveClass('ips-icon-button');
  });

  test('wraps button in Tooltip when tooltip prop is provided', () => {
    render(
      <IpsIconButton
        icon={<TestIcon />}
        tooltip="Test tooltip"
        data-testid="icon-button"
      />
    );
    // Tooltip adds aria-label to the button
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Test tooltip');
  });

  test('does not wrap button in Tooltip when tooltip prop is not provided', () => {
    const { container } = render(
      <IpsIconButton icon={<TestIcon />} data-testid="icon-button" />
    );
    const button = container.querySelector('button');
    expect(button).toBeInTheDocument();
  });

  test('applies disabled state', () => {
    render(
      <IpsIconButton
        icon={<TestIcon />}
        disabled
        data-testid="icon-button"
      />
    );
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  test('applies size prop', () => {
    const { container } = render(
      <IpsIconButton icon={<TestIcon />} size="small" data-testid="icon-button" />
    );
    const button = container.querySelector('button');
    expect(button).toHaveClass('MuiIconButton-sizeSmall');
  });

  test('applies color prop', () => {
    const { container } = render(
      <IpsIconButton icon={<TestIcon />} color="primary" data-testid="icon-button" />
    );
    const button = container.querySelector('button');
    expect(button).toHaveClass('MuiIconButton-colorPrimary');
  });

  test('calls onClick handler when clicked', async () => {
    const handleClick = jest.fn();
    render(
      <IpsIconButton
        icon={<TestIcon />}
        onClick={handleClick}
        data-testid="icon-button"
      />
    );
    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('merges custom className', () => {
    const { container } = render(
      <IpsIconButton
        icon={<TestIcon />}
        className="custom-class"
        data-testid="icon-button"
      />
    );
    const button = container.querySelector('button');
    expect(button).toHaveClass('ips-icon-button');
    expect(button).toHaveClass('custom-class');
  });

  test('supports ref forwarding', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<IpsIconButton ref={ref} icon={<TestIcon />} />);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
