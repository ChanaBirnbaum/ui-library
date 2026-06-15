import React from 'react'
import { render, screen, within, fireEvent } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { IpsTabs } from './IpsTabs'
import type { IpsTabItem } from './IpsTabs.types'

const theme = createTheme()

const wrap = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

const TABS: IpsTabItem[] = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
]

describe('IpsTabs', () => {
  // ── Rendering ──────────────────────────────────────────────────────────────

  it('renders without crashing', () => {
    wrap(<IpsTabs tabs={TABS} value="one" />)
    expect(document.querySelector('.ips-tabs')).toBeInTheDocument()
  })

  it('renders all tab labels', () => {
    wrap(<IpsTabs tabs={TABS} value="one" />)
    expect(screen.getByText('One')).toBeInTheDocument()
    expect(screen.getByText('Two')).toBeInTheDocument()
    expect(screen.getByText('Three')).toBeInTheDocument()
  })

  it('renders the correct number of tabs', () => {
    wrap(<IpsTabs tabs={TABS} value="one" />)
    expect(screen.getAllByRole('tab')).toHaveLength(TABS.length)
  })

  // ── displayName + forwardRef ───────────────────────────────────────────────

  it('has displayName IpsTabs', () => {
    expect(IpsTabs.displayName).toBe('IpsTabs')
  })

  it('forwards ref to the root element', () => {
    const ref = React.createRef<HTMLDivElement>()
    wrap(<IpsTabs tabs={TABS} value="one" ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLElement)
    expect(ref.current).toHaveClass('ips-tabs')
  })

  // ── className ──────────────────────────────────────────────────────────────

  it('applies ips-tabs class to root', () => {
    wrap(<IpsTabs tabs={TABS} value="one" />)
    expect(document.querySelector('.ips-tabs')).toBeInTheDocument()
  })

  it('appends extra className to root', () => {
    wrap(<IpsTabs tabs={TABS} value="one" className="my-tabs" />)
    expect(document.querySelector('.ips-tabs.my-tabs')).toBeInTheDocument()
  })

  it('applies ips-tab class to each tab', () => {
    wrap(<IpsTabs tabs={TABS} value="one" />)
    expect(document.querySelectorAll('.ips-tab')).toHaveLength(TABS.length)
  })

  // ── Controlled value — selection by value, not index ──────────────────────

  it('marks the tab whose value matches the controlled value as selected', () => {
    wrap(<IpsTabs tabs={TABS} value="two" />)
    const tabs = screen.getAllByRole('tab')
    expect(tabs[0]).toHaveAttribute('aria-selected', 'false')
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
    expect(tabs[2]).toHaveAttribute('aria-selected', 'false')
  })

  it('respects selection by value not by index — selecting third tab', () => {
    wrap(<IpsTabs tabs={TABS} value="three" />)
    const tabs = screen.getAllByRole('tab')
    expect(tabs[2]).toHaveAttribute('aria-selected', 'true')
    expect(tabs[0]).toHaveAttribute('aria-selected', 'false')
  })

  it('holds no internal active-tab state — changing value prop changes selection', () => {
    const { rerender } = wrap(<IpsTabs tabs={TABS} value="one" />)
    expect(screen.getAllByRole('tab')[0]).toHaveAttribute('aria-selected', 'true')
    rerender(
      <ThemeProvider theme={theme}>
        <IpsTabs tabs={TABS} value="three" />
      </ThemeProvider>
    )
    expect(screen.getAllByRole('tab')[2]).toHaveAttribute('aria-selected', 'true')
    expect(screen.getAllByRole('tab')[0]).toHaveAttribute('aria-selected', 'false')
  })

  // ── onTabChange ───────────────────────────────────────────────────────────

  it('calls onTabChange with (value, tab) when a tab is clicked', () => {
    const handler = jest.fn()
    wrap(<IpsTabs tabs={TABS} value="one" onTabChange={handler} />)
    fireEvent.click(screen.getByText('Two'))
    expect(handler).toHaveBeenCalledTimes(1)
    expect(handler).toHaveBeenCalledWith('two', TABS[1])
  })

  it('onTabChange passes the correct tab object by value lookup', () => {
    const handler = jest.fn()
    wrap(<IpsTabs tabs={TABS} value="one" onTabChange={handler} />)
    fireEvent.click(screen.getByText('Three'))
    expect(handler).toHaveBeenCalledWith('three', TABS[2])
  })

  it('does not change selection internally after onTabChange fires', () => {
    const handler = jest.fn()
    wrap(<IpsTabs tabs={TABS} value="one" onTabChange={handler} />)
    fireEvent.click(screen.getByText('Two'))
    // 'one' is still the controlled value — component must NOT change selection
    expect(screen.getAllByRole('tab')[0]).toHaveAttribute('aria-selected', 'true')
    expect(screen.getAllByRole('tab')[1]).toHaveAttribute('aria-selected', 'false')
  })

  // ── Disabled tabs ─────────────────────────────────────────────────────────

  it('disabled tab is rendered as disabled', () => {
    // MUI v7 Tab renders a <button> with the native disabled attribute.
    // jest-dom's toBeDisabled() checks both native disabled and aria-disabled.
    const tabs: IpsTabItem[] = [
      { value: 'a', label: 'A' },
      { value: 'b', label: 'B', disabled: true },
    ]
    wrap(<IpsTabs tabs={tabs} value="a" />)
    const allTabs = screen.getAllByRole('tab', { hidden: true })
    expect(allTabs[1]).toBeDisabled()
  })

  it('clicking a disabled tab does not fire onTabChange', () => {
    const handler = jest.fn()
    const tabs: IpsTabItem[] = [
      { value: 'a', label: 'A' },
      { value: 'b', label: 'B', disabled: true },
    ]
    wrap(<IpsTabs tabs={tabs} value="a" onTabChange={handler} />)
    fireEvent.click(screen.getByText('B'))
    expect(handler).not.toHaveBeenCalled()
  })

  // ── Error tab ─────────────────────────────────────────────────────────────

  it('error tab has aria-invalid attribute', () => {
    const tabs: IpsTabItem[] = [
      { value: 'a', label: 'A' },
      { value: 'b', label: 'B', error: true },
    ]
    wrap(<IpsTabs tabs={tabs} value="a" />)
    const allTabs = screen.getAllByRole('tab')
    expect(allTabs[1]).toHaveAttribute('aria-invalid', 'true')
    expect(allTabs[0]).not.toHaveAttribute('aria-invalid')
  })

  // ── Accessibility — tab/panel id wiring ───────────────────────────────────

  it('each tab has correct id from idPrefix', () => {
    wrap(<IpsTabs tabs={TABS} value="one" idPrefix="test" />)
    const tabs = screen.getAllByRole('tab')
    expect(tabs[0]).toHaveAttribute('id', 'test-tab-one')
    expect(tabs[1]).toHaveAttribute('id', 'test-tab-two')
    expect(tabs[2]).toHaveAttribute('id', 'test-tab-three')
  })

  it('each tab has correct aria-controls pointing to panel id', () => {
    wrap(<IpsTabs tabs={TABS} value="one" idPrefix="test" />)
    const tabs = screen.getAllByRole('tab')
    expect(tabs[0]).toHaveAttribute('aria-controls', 'test-panel-one')
    expect(tabs[1]).toHaveAttribute('aria-controls', 'test-panel-two')
    expect(tabs[2]).toHaveAttribute('aria-controls', 'test-panel-three')
  })

  it('uses default idPrefix "ips-tabs" when not provided', () => {
    wrap(<IpsTabs tabs={TABS} value="one" />)
    expect(screen.getAllByRole('tab')[0]).toHaveAttribute('id', 'ips-tabs-tab-one')
    expect(screen.getAllByRole('tab')[0]).toHaveAttribute('aria-controls', 'ips-tabs-panel-one')
  })

  // ── renderPanels (active only) ────────────────────────────────────────────

  it('does not render panels when renderPanels is false (default)', () => {
    const tabs: IpsTabItem[] = [
      { value: 'a', label: 'A', content: <div data-testid="panel-a">A Content</div> },
    ]
    wrap(<IpsTabs tabs={tabs} value="a" />)
    expect(screen.queryByTestId('panel-a')).not.toBeInTheDocument()
  })

  it('renders the active panel when renderPanels is true', () => {
    const tabs: IpsTabItem[] = [
      { value: 'a', label: 'A', content: <div data-testid="panel-a">A Content</div> },
      { value: 'b', label: 'B', content: <div data-testid="panel-b">B Content</div> },
    ]
    wrap(<IpsTabs tabs={tabs} value="a" renderPanels />)
    expect(screen.getByTestId('panel-a')).toBeInTheDocument()
    expect(screen.queryByTestId('panel-b')).not.toBeInTheDocument()
  })

  it('panels have correct role, id, and aria-labelledby', () => {
    const tabs: IpsTabItem[] = [
      { value: 'x', label: 'X', content: <div>Content</div> },
    ]
    wrap(<IpsTabs tabs={tabs} value="x" renderPanels idPrefix="my" />)
    const panel = document.getElementById('my-panel-x')!
    expect(panel).toBeInTheDocument()
    expect(panel).toHaveAttribute('role', 'tabpanel')
    expect(panel).toHaveAttribute('aria-labelledby', 'my-tab-x')
    expect(panel).toHaveClass('ips-tab-panel')
  })

  // ── keepMounted ────────────────────────────────────────────────────────────

  it('with keepMounted, all panels are mounted and inactive ones have hidden attr', () => {
    const tabs: IpsTabItem[] = [
      { value: 'a', label: 'A', content: <div data-testid="panel-a">A</div> },
      { value: 'b', label: 'B', content: <div data-testid="panel-b">B</div> },
      { value: 'c', label: 'C', content: <div data-testid="panel-c">C</div> },
    ]
    wrap(<IpsTabs tabs={tabs} value="b" renderPanels keepMounted />)
    // All panels are in the DOM
    expect(screen.getByTestId('panel-a')).toBeInTheDocument()
    expect(screen.getByTestId('panel-b')).toBeInTheDocument()
    expect(screen.getByTestId('panel-c')).toBeInTheDocument()
    // Inactive panels have hidden attribute
    expect(document.getElementById('ips-tabs-panel-a')).toHaveAttribute('hidden')
    expect(document.getElementById('ips-tabs-panel-c')).toHaveAttribute('hidden')
    // Active panel does NOT have hidden
    expect(document.getElementById('ips-tabs-panel-b')).not.toHaveAttribute('hidden')
  })

  // ── renderTabLabel ────────────────────────────────────────────────────────

  it('uses renderTabLabel to override tab label content', () => {
    wrap(
      <IpsTabs
        tabs={TABS}
        value="one"
        renderTabLabel={({ tab }) => (
          <span data-testid="custom-label">{(tab.label as string).toUpperCase()}</span>
        )}
      />
    )
    expect(screen.getAllByTestId('custom-label').length).toBe(TABS.length)
    expect(screen.getByText('ONE')).toBeInTheDocument()
    expect(screen.getByText('TWO')).toBeInTheDocument()
  })

  // ── badge ─────────────────────────────────────────────────────────────────

  it('renders badge content next to the label', () => {
    const tabs: IpsTabItem[] = [{ value: 'inbox', label: 'Inbox', badge: 5 }]
    wrap(<IpsTabs tabs={tabs} value="inbox" />)
    expect(screen.getByText('5')).toBeInTheDocument()
    expect(screen.getByText('Inbox')).toBeInTheDocument()
  })

  // ── orientation ───────────────────────────────────────────────────────────

  it('does not crash with orientation="vertical"', () => {
    wrap(<IpsTabs tabs={TABS} value="one" orientation="vertical" />)
    expect(document.querySelector('.ips-tabs')).toBeInTheDocument()
  })

  // ── variant ───────────────────────────────────────────────────────────────

  it('does not crash with variant="scrollable"', () => {
    wrap(<IpsTabs tabs={TABS} value="one" variant="scrollable" />)
    expect(document.querySelector('.ips-tabs')).toBeInTheDocument()
  })

  it('does not crash with variant="fullWidth"', () => {
    wrap(<IpsTabs tabs={TABS} value="one" variant="fullWidth" />)
    expect(document.querySelector('.ips-tabs')).toBeInTheDocument()
  })

  // ── sx prop ───────────────────────────────────────────────────────────────

  it('accepts sx prop without crashing', () => {
    wrap(<IpsTabs tabs={TABS} value="one" sx={{ mt: 2 }} />)
    expect(document.querySelector('.ips-tabs')).toBeInTheDocument()
  })
})
