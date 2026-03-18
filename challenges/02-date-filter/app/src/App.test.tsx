import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

/**
 * Tests assert the *correct* (fixed) behavior of the date filter.
 * They fail when the intentional bugs are present and pass when the learner fixes them.
 */
describe('Dashboard date filter (challenge-02)', () => {
  it('renders without crashing', () => {
    expect(() => render(<App />)).not.toThrow()
  })

  it('shows all four orders when no filter is applied', () => {
    render(<App />)
    const rows = screen.getAllByRole('row')
    expect(rows).toHaveLength(5) // header + 4 data rows
    expect(screen.getByText('Alice')).toBeInTheDocument()
    expect(screen.getByText('Bob')).toBeInTheDocument()
    expect(screen.getByText('Diana')).toBeInTheDocument()
    expect(screen.getByText('—')).toBeInTheDocument() // null customer
  })

  it('filters to inclusive date range (2024-01-13 to 2024-01-15) and shows 3 orders', () => {
    render(<App />)
    const fromInput = screen.getByLabelText(/filter from date/i)
    const toInput = screen.getByLabelText(/filter to date/i)
    const applyBtn = screen.getByRole('button', { name: /apply/i })

    fireEvent.change(fromInput, { target: { value: '2024-01-13' } })
    fireEvent.change(toInput, { target: { value: '2024-01-15' } })
    fireEvent.click(applyBtn)

    const table = screen.getByRole('table')
    const dataRows = table.querySelectorAll('tbody tr')
    expect(dataRows).toHaveLength(3) // 3 orders in range (13th, 14th, 15th)
    expect(screen.getByText('Alice')).toBeInTheDocument()
    expect(screen.getByText('Bob')).toBeInTheDocument()
    expect(screen.getByText('—')).toBeInTheDocument()
    expect(screen.queryByText('Diana')).not.toBeInTheDocument()
  })

  it('clearing the filter restores all orders', () => {
    render(<App />)
    const fromInput = screen.getByLabelText(/filter from date/i)
    const toInput = screen.getByLabelText(/filter to date/i)
    const applyBtn = screen.getByRole('button', { name: /apply/i })
    const clearBtn = screen.getByRole('button', { name: /clear/i })

    fireEvent.change(fromInput, { target: { value: '2024-01-13' } })
    fireEvent.change(toInput, { target: { value: '2024-01-15' } })
    fireEvent.click(applyBtn)

    let table = screen.getByRole('table')
    expect(table.querySelectorAll('tbody tr')).toHaveLength(3)

    fireEvent.click(clearBtn)

    table = screen.getByRole('table')
    expect(table.querySelectorAll('tbody tr')).toHaveLength(4)
    expect(screen.getByText('Diana')).toBeInTheDocument()
  })

  it('shows stats cards correctly', () => {
    render(<App />)
    expect(screen.getByText('$12,450')).toBeInTheDocument()
    expect(screen.getByText('89')).toBeInTheDocument()
    expect(screen.getByText('312')).toBeInTheDocument()
  })
})
