import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { DemoSidebar } from './DemoSidebar'
import type { NavItem } from './DemoSidebar'
import { slugify, useHashRoute } from './useHashRoute'

const ITEMS: NavItem[] = [
  { label: 'Button', group: 'קלט ופעולות', id: slugify('Button') },
  { label: 'TextField', group: 'קלט ופעולות', id: slugify('TextField') },
  { label: 'DateTimePicker', group: 'תאריך ושעה', id: slugify('DateTimePicker') },
]

const IDS = ITEMS.map(i => i.id)

/** Stand-in for App: the same router + sidebar wiring, without the 25 panels. */
function Harness() {
  const [route, navigate] = useHashRoute(IDS, IDS[0])
  return (
    <>
      <div data-testid="route">{route}</div>
      <DemoSidebar items={ITEMS} activeId={route} onSelect={navigate} />
    </>
  )
}

beforeEach(() => {
  window.location.hash = ''
})

describe('slugify', () => {
  it('splits camel case into a kebab route', () => {
    expect(slugify('Button')).toBe('ips-button')
    expect(slugify('DateTimePicker')).toBe('ips-date-time-picker')
  })
})

describe('useHashRoute', () => {
  it('opens on the component named in the hash', () => {
    window.location.hash = '#/ips-date-time-picker'
    render(<Harness />)
    expect(screen.getByTestId('route')).toHaveTextContent('ips-date-time-picker')
  })

  it('falls back to the first component for a bare or unknown URL', () => {
    window.location.hash = '#/ips-nope'
    render(<Harness />)
    expect(screen.getByTestId('route')).toHaveTextContent('ips-button')
  })

  it('writes the fallback back to the URL so a refresh is stable', async () => {
    render(<Harness />)
    await waitFor(() => expect(window.location.hash).toBe('#/ips-button'))
  })

  it('puts the component in the URL when the sidebar is clicked', async () => {
    render(<Harness />)
    fireEvent.click(screen.getByText('IpsTextField'))
    await waitFor(() => expect(window.location.hash).toBe('#/ips-text-field'))
    expect(screen.getByTestId('route')).toHaveTextContent('ips-text-field')
  })

  it('follows back/forward navigation', async () => {
    render(<Harness />)
    window.location.hash = '#/ips-date-time-picker'
    await waitFor(() =>
      expect(screen.getByTestId('route')).toHaveTextContent('ips-date-time-picker')
    )
  })
})

describe('DemoSidebar', () => {
  it('marks the active item', () => {
    window.location.hash = '#/ips-text-field'
    render(<Harness />)
    expect(screen.getByText('IpsTextField').closest('button')).toHaveAttribute('aria-current', 'page')
    expect(screen.getByText('IpsButton').closest('button')).not.toHaveAttribute('aria-current')
  })

  it('filters the tree, dropping groups with no match', () => {
    render(<Harness />)
    fireEvent.change(screen.getByPlaceholderText('חיפוש פקד'), { target: { value: 'picker' } })
    expect(screen.getByText('IpsDateTimePicker')).toBeInTheDocument()
    expect(screen.queryByText('IpsButton')).not.toBeInTheDocument()
    expect(screen.queryByText('קלט ופעולות')).not.toBeInTheDocument()
  })

  it('reports an empty filter result', () => {
    render(<Harness />)
    fireEvent.change(screen.getByPlaceholderText('חיפוש פקד'), { target: { value: 'zzz' } })
    expect(screen.getByText('לא נמצאו פקדים תואמים')).toBeInTheDocument()
  })

  it('collapses and re-expands a group', async () => {
    render(<Harness />)
    fireEvent.click(screen.getByText('תאריך ושעה'))
    await waitFor(() => expect(screen.queryByText('IpsDateTimePicker')).not.toBeInTheDocument())
    fireEvent.click(screen.getByText('תאריך ושעה'))
    await waitFor(() => expect(screen.getByText('IpsDateTimePicker')).toBeInTheDocument())
  })

  it('focuses the filter on "/"', () => {
    render(<Harness />)
    const input = screen.getByPlaceholderText('חיפוש פקד')
    expect(input).not.toHaveFocus()
    fireEvent.keyDown(window, { key: '/' })
    expect(input).toHaveFocus()
  })
})
