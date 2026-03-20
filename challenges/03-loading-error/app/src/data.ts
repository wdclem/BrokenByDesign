export const stats = {
  revenue: 12450,
  ordersCount: 89,
  customers: 312,
}

export interface Order {
  id: string
  customer: { name: string } | null
  amount: number
  date: string
}

export interface DashboardData {
  stats: typeof stats
  recentOrders: Order[]
}

export const recentOrders: Order[] = [
  { id: '1', customer: { name: 'Alice' }, amount: 42, date: '2024-01-15' },
  { id: '2', customer: { name: 'Bob' }, amount: 18, date: '2024-01-14' },
  { id: '3', customer: null, amount: 99, date: '2024-01-13' },
  { id: '4', customer: { name: 'Diana' }, amount: 210, date: '2024-01-12' },
]

export function fetchDashboardData(
  shouldFail: boolean,
  delayMs = 700,
): Promise<DashboardData> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error('Network error'))
        return
      }
      resolve({
        stats,
        recentOrders,
      })
    }, delayMs)
  })
}
