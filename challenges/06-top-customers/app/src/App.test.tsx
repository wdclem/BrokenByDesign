import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

function readTopCustomers(): Array<{ label: string; total: number }> {
  const items = screen.getAllByRole('listitem')
  return items.map((item) => {
    const text = item.textContent ?? ''
    const [labelPart, totalPart] = text.split('—').map((part) => part.trim())
    return {
      label: labelPart,
      total: Number(totalPart.replace('$', '')),
    }
  })
}

describe('Top customers widget (challenge-06)', () => {
  it('shows top 3 customers by total amount desc on initial data', () => {
    render(<App />)

    expect(readTopCustomers()).toEqual([
      { label: 'Diana', total: 210 },
      { label: 'Alice', total: 180 },
      { label: 'Bob', total: 165 },
    ])
  })

  it('updates top customers when orders data changes', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: /refresh data/i }))

    expect(readTopCustomers()).toEqual([
      { label: 'Bob', total: 425 },
      { label: 'Diana', total: 210 },
      { label: 'Alice', total: 180 },
    ])
  })
})
