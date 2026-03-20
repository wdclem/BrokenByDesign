export const stats = {
  revenue: 12450,
  ordersCount: 89,
  customers: 312,
}

export interface Order {
  id: string
  customer: { id: string; name: string } | null
  amount: number
  date: string
}

export const baseOrders: Order[] = [
  { id: '1', customer: { id: 'c1', name: 'Alice' }, amount: 120, date: '2024-01-15' },
  { id: '2', customer: { id: 'c2', name: 'Bob' }, amount: 75, date: '2024-01-14' },
  { id: '3', customer: { id: 'c1', name: 'Alice' }, amount: 60, date: '2024-01-13' },
  { id: '4', customer: { id: 'c3', name: 'Diana' }, amount: 210, date: '2024-01-12' },
  { id: '5', customer: { id: 'c2', name: 'Bob' }, amount: 90, date: '2024-01-11' },
]

export const refreshedOrders: Order[] = [
  { id: '1', customer: { id: 'c1', name: 'Alice' }, amount: 120, date: '2024-01-15' },
  { id: '2', customer: { id: 'c2', name: 'Bob' }, amount: 75, date: '2024-01-14' },
  { id: '3', customer: { id: 'c1', name: 'Alice' }, amount: 60, date: '2024-01-13' },
  { id: '4', customer: { id: 'c3', name: 'Diana' }, amount: 210, date: '2024-01-12' },
  { id: '5', customer: { id: 'c2', name: 'Bob' }, amount: 350, date: '2024-01-11' },
]
