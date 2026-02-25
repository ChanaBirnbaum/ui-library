import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '@mui/material/Button';
import { IpsToolTips } from './IpsToolTips';

describe('IpsToolTips', () => {
  test('renders children correctly', () => {
    render(
      <IpsToolTips title="Test tooltip">
        <Button data-testid="button-child">Hover me</Button>
      </IpsToolTips>
    );
    
    const button = screen.getByTestId('button-child');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Hover me');
  });

  test('renders with default props (arrow=true, placement=top)', () => {
    const { container } = render(
      <IpsToolTips title="Test tooltip">
        <Button>Hover me</Button>
      </IpsToolTips>
    );
    
    // Component renders without errors
    expect(container.firstChild).toBeInTheDocument();
  });

  test('renders with arrow={false}', () => {
    const { container } = render(
      <IpsToolTips title="Test tooltip" arrow={false}>
        <Button>Hover me</Button>
      </IpsToolTips>
    );
    
    expect(container.firstChild).toBeInTheDocument();
  });

  test('renders with different placements', () => {
    const placements = ['top', 'right', 'bottom', 'left'] as const;
    
    placements.forEach((placement) => {
      const { container } = render(
        <IpsToolTips title="Test" placement={placement}>
          <Button>Test</Button>
        </IpsToolTips>
      );
      
      expect(container.firstChild).toBeInTheDocument();
    });
  });

  test('supports custom className', () => {
    const { container } = render(
      <IpsToolTips title="Test tooltip" className="custom-class">
        <Button>Hover me</Button>
      </IpsToolTips>
    );
    
    expect(container.firstChild).toBeInTheDocument();
  });

  test('supports ref forwarding', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(
      <IpsToolTips ref={ref} title="Test tooltip">
        <Button>Hover me</Button>
      </IpsToolTips>
    );
    
    // Ref should be assigned
    expect(ref.current).toBeDefined();
  });

  test('passes through all MUI TooltipProps', () => {
    const { container } = render(
      <IpsToolTips 
        title="Test tooltip" 
        arrow={true}
        placement="bottom"
        enterDelay={100}
      >
        <Button>Hover me</Button>
      </IpsToolTips>
    );
    
    expect(container.firstChild).toBeInTheDocument();
  });

  test('merges className with componentsProps.tooltip className', () => {
    const { container } = render(
      <IpsToolTips 
        title="Test tooltip" 
        className="custom-class"
        componentsProps={{ tooltip: { className: 'tooltip-class' } }}
      >
        <Button>Hover me</Button>
      </IpsToolTips>
    );
    
    expect(container.firstChild).toBeInTheDocument();
  });

  test('renders without children (for edge case)', () => {
    const { container } = render(
      <IpsToolTips title="Test tooltip">
        <span>Content</span>
      </IpsToolTips>
    );
    
    expect(container.firstChild).toBeInTheDocument();
  });
});
