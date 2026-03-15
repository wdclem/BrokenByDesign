import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

/**
 * These tests assert the *correct* (fixed) behavior of the dashboard.
 * They fail when the intentional bugs are present and pass when the learner fixes them.
 */
describe('Dashboard (challenge-01)', () => {
  it('renders without crashing', () => {
    expect(() => render(<App />)).not.toThrow()
  })

  it('shows Revenue card with formatted value', () => {
    render(<App />)
    expect(screen.getByText('Revenue')).toBeInTheDocument()
    expect(screen.getByText('$12,450')).toBeInTheDocument()
  })

  it('shows Orders card with orders count (89), not revenue', () => {
    render(<App />)
    expect(screen.getByText('Orders')).toBeInTheDocument()
    expect(screen.getByText('89')).toBeInTheDocument()
  })

  it('shows Customers card with count 312', () => {
    render(<App />)
    expect(screen.getByText('312')).toBeInTheDocument()
  })

  it('has three stat cards with class "card" (layout fix)', () => {
    render(<App />)
    const cards = document.querySelectorAll('.cards .card')
    expect(cards).toHaveLength(3)
  })

  it('renders recent orders table with 4 rows and handles null customer', () => {
    render(<App />)
    expect(screen.getByRole('table')).toBeInTheDocument()
    const rows = screen.getAllByRole('row')
    expect(rows).toHaveLength(5) // 1 header + 4 data rows
    // Row with null customer should show a fallback (e.g. "—" or "Guest"), not "undefined" or throw
    expect(screen.getByText('Alice')).toBeInTheDocument()
    expect(screen.getByText('Bob')).toBeInTheDocument()
    expect(screen.getByText('Diana')).toBeInTheDocument()
    // The null-customer row (order id 3): cell should have some fallback text
    const order3Row = rows.find((r) => (r as HTMLTableRowElement).cells[0]?.textContent === '3')
    expect(order3Row).toBeDefined()
    const customerCell = (order3Row as HTMLTableRowElement | undefined)?.cells[1]
    expect(customerCell?.textContent).toBeTruthy()
    expect(customerCell?.textContent).not.toBe('undefined')
  })
})
