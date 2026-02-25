import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { IpsAccordion } from './IpsAccordion'

describe('IpsAccordion', () => {
  it('should render without crashing', () => {
    render(<IpsAccordion summary="Test Summary" children="Test Content" />)
    expect(screen.getByText('Test Summary')).toBeInTheDocument()
  })

  it('should display the summary text', () => {
    render(<IpsAccordion summary="Accordion Header" children="Content" />)
    expect(screen.getByText('Accordion Header')).toBeInTheDocument()
  })

  it('should display the children content when expanded', async () => {
    const { rerender } = render(
      <IpsAccordion summary="Summary" children="Content Text" />
    )

    const button = screen.getByRole('button', { name: /Summary/i })
    await userEvent.click(button)

    rerender(<IpsAccordion summary="Summary" children="Content Text" />)
    expect(screen.getByText('Content Text')).toBeInTheDocument()
  })

  it('should apply ips-accordion class name', () => {
    const { container } = render(
      <IpsAccordion summary="Test" children="Content" />
    )
    const accordion = container.querySelector('.ips-accordion')
    expect(accordion).toBeInTheDocument()
  })

  it('should merge custom class name with ips-accordion', () => {
    const { container } = render(
      <IpsAccordion
        summary="Test"
        children="Content"
        className="custom-class"
      />
    )
    const accordion = container.querySelector('.ips-accordion.custom-class')
    expect(accordion).toBeInTheDocument()
  })

  it('should set displayName correctly', () => {
    expect(IpsAccordion.displayName).toBe('IpsAccordion')
  })

  it('should render expanded by default when defaultExpanded is true', () => {
    const { container } = render(
      <IpsAccordion
        summary="Expanded"
        children="Content"
        defaultExpanded={true}
      />
    )
    const accordion = container.querySelector('.MuiAccordion-root')
    expect(accordion).toHaveClass('Mui-expanded')
  })

  it('should not be expanded by default when defaultExpanded is false', () => {
    const { container } = render(
      <IpsAccordion summary="Collapsed" children="Content" defaultExpanded={false} />
    )
    const accordion = container.querySelector('.MuiAccordion-root')
    expect(accordion).not.toHaveClass('Mui-expanded')
  })

  it('should render expand icon', () => {
    const { container } = render(
      <IpsAccordion summary="Test" children="Content" />
    )
    const expandIcon = container.querySelector('svg')
    expect(expandIcon).toBeInTheDocument()
  })

  it('should be disabled when disabled prop is true', () => {
    const { container } = render(
      <IpsAccordion summary="Disabled" children="Content" disabled={true} />
    )
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })

  it('should call onChange when expanded/collapsed', async () => {
    const handleChange = jest.fn()
    render(
      <IpsAccordion
        summary="Test"
        children="Content"
        onChange={handleChange}
      />
    )

    const button = screen.getByRole('button')
    await userEvent.click(button)

    expect(handleChange).toHaveBeenCalled()
  })

  it('should support ref forwarding', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(
      <IpsAccordion ref={ref} summary="Test" children="Content" />
    )
    expect(ref.current).toBeInTheDocument()
    expect(ref.current?.className).toContain('ips-accordion')
  })

  it('should render custom JSX in summary', () => {
    const customSummary = (
      <div>
        <strong>Bold Title</strong>
        <span> with subtitle</span>
      </div>
    )
    render(<IpsAccordion summary={customSummary} children="Content" />)
    expect(screen.getByText('Bold Title')).toBeInTheDocument()
    expect(screen.getByText(/with subtitle/)).toBeInTheDocument()
  })

  it('should render custom JSX in children', () => {
    const customContent = (
      <div>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
      </div>
    )
    render(<IpsAccordion summary="Summary" children={customContent} />)
    const button = screen.getByRole('button')
    userEvent.click(button)
    expect(screen.getByText('Paragraph 1')).toBeInTheDocument()
    expect(screen.getByText('Paragraph 2')).toBeInTheDocument()
  })

  it('should render multiple accordions independently', () => {
    const { container } = render(
      <>
        <IpsAccordion summary="First" children="Content 1" />
        <IpsAccordion summary="Second" children="Content 2" />
        <IpsAccordion summary="Third" children="Content 3" />
      </>
    )
    const accordions = container.querySelectorAll('.ips-accordion')
    expect(accordions).toHaveLength(3)
  })

  it('should handle aria attributes correctly', () => {
    render(<IpsAccordion summary="Test" children="Content" />)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-controls', 'accordion-content')
  })

  it('should update content when children prop changes', () => {
    const { rerender } = render(
      <IpsAccordion summary="Summary" children="Initial Content" />
    )

    expect(screen.getByText('Initial Content')).toBeInTheDocument()

    rerender(<IpsAccordion summary="Summary" children="Updated Content" />)

    expect(screen.getByText('Updated Content')).toBeInTheDocument()
  })
})
