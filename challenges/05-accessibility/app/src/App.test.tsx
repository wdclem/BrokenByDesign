import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('Dashboard accessibility basics (challenge-05)', () => {
  it('renders with a proper page heading', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /sales dashboard/i }),
    ).toBeInTheDocument()
  })

  it('stat cards have accessible text labels', () => {
    render(<App />)
    expect(screen.getByText(/revenue/i)).toBeInTheDocument()
    expect(screen.getByText(/orders/i)).toBeInTheDocument()
    expect(screen.getByText(/customers/i)).toBeInTheDocument()
  })

  it('table uses column headers', () => {
    render(<App />)
    expect(screen.getByRole('columnheader', { name: /id/i })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: /customer/i })).toBeInTheDocument()
    expect(screen.getByRole('columnheader', { name: /amount/i })).toBeInTheDocument()
  })

  it('search input is associated with a visible label', () => {
    render(<App />)
    expect(screen.getByLabelText(/search customer/i)).toBeInTheDocument()
  })

  it('action control is a keyboard-reachable button with accessible name', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })
})
