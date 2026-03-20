import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import App from './App'

/**
 * Tests assert the *correct* (fixed) behavior of loading/error/retry.
 * They fail while intentional bugs are present.
 */
describe('Dashboard loading and error states (challenge-03)', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('shows a loading message while request is in flight', async () => {
    render(<App />)

    expect(screen.getByText(/loading dashboard data/i)).toBeInTheDocument()

    vi.advanceTimersByTime(800)
    await waitFor(() =>
      expect(screen.queryByText(/loading dashboard data/i)).not.toBeInTheDocument(),
    )
  })

  it('shows a clear error message when the request fails', async () => {
    render(<App />)

    vi.advanceTimersByTime(800)
    await waitFor(() =>
      expect(screen.getByText(/could not load dashboard data/i)).toBeInTheDocument(),
    )
  })

  it('retry triggers a new fetch and eventually shows orders', async () => {
    render(<App />)

    vi.advanceTimersByTime(800)
    await waitFor(() =>
      expect(screen.getByText(/could not load dashboard data/i)).toBeInTheDocument(),
    )

    fireEvent.click(screen.getByLabelText(/toggle simulated api failure/i))
    fireEvent.click(screen.getByRole('button', { name: /retry/i }))

    vi.advanceTimersByTime(800)
    await waitFor(() => expect(screen.getByText('Alice')).toBeInTheDocument())
  })
})
