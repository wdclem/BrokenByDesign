import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

function getAmountColumnValues(): number[] {
  const rows = screen.getAllByRole('row').slice(1)
  return rows.map((row) => {
    const amountCell = row.querySelectorAll('td')[2]
    return Number((amountCell?.textContent ?? '').replace('$', ''))
  })
}

function getDateColumnValues(): string[] {
  const rows = screen.getAllByRole('row').slice(1)
  return rows.map((row) => row.querySelectorAll('td')[3]?.textContent ?? '')
}

describe('Dashboard table sort (challenge-04)', () => {
  it('renders without crashing', () => {
    expect(() => render(<App />)).not.toThrow()
  })

  it('keeps default row order before sorting', () => {
    render(<App />)
    expect(getAmountColumnValues()).toEqual([42, 18, 99, 210])
  })

  it('sorts amount ascending on first click', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('button', { name: /^amount$/i }))
    expect(getAmountColumnValues()).toEqual([18, 42, 99, 210])
  })

  it('sorts amount descending on second click', () => {
    render(<App />)
    const amountBtn = screen.getByRole('button', { name: /^amount$/i })
    fireEvent.click(amountBtn)
    fireEvent.click(amountBtn)
    expect(getAmountColumnValues()).toEqual([210, 99, 42, 18])
  })

  it('sorts date ascending on first click', () => {
    render(<App />)
    fireEvent.click(screen.getByRole('button', { name: /^date$/i }))
    expect(getDateColumnValues()).toEqual([
      '2024-01-12',
      '2024-01-13',
      '2024-01-14',
      '2024-01-15',
    ])
  })
})
