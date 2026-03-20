import { useMemo, useState } from 'react'
import './App.css'
import { recentOrders, stats, type Order } from './data'

type SortColumn = 'amount' | 'date'
type SortDirection = 'asc' | 'desc'

function App() {
  const [sortBy, setSortBy] = useState<SortColumn | null>(null)
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc')

  function handleSort(column: SortColumn) {
    if (sortBy === column) {
      setSortDirection('asc') // BUG 4: does not toggle, always resets to asc
    } else {
      setSortBy(column)
      setSortDirection('asc')
    }
  }

  const displayedOrders = useMemo(() => {
    if (!sortBy) {
      return recentOrders
    }

    return recentOrders.sort((a: Order, b: Order) => {
      // BUG 3: mutates original data source in-place via sort on recentOrders
      if (sortBy === 'amount') {
        // BUG 1: numeric amount sorted as string
        return String(a.amount).localeCompare(String(b.amount))
      }

      // BUG 2: wrong field used for date sort
      return a.id.localeCompare(b.id)
    })
  }, [sortBy, sortDirection])

  return (
    <div className="app">
      <h1 className="title">Sales Dashboard</h1>

      <div className="cards">
        <div className="card">
          <div className="cardLabel">Revenue</div>
          <div className="cardValue">${stats.revenue.toLocaleString()}</div>
        </div>
        <div className="card">
          <div className="cardLabel">Orders</div>
          <div className="cardValue">{stats.ordersCount}</div>
        </div>
        <div className="card">
          <div className="cardLabel">Customers</div>
          <div className="cardValue">{stats.customers}</div>
        </div>
      </div>

      <h2 className="sectionTitle">Recent orders</h2>
      <div className="tableWrap">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>
                <button className="sortBtn" onClick={() => handleSort('amount')}>
                  Amount
                </button>
              </th>
              <th>
                <button className="sortBtn" onClick={() => handleSort('date')}>
                  Date
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {displayedOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer?.name ?? '—'}</td>
                <td>${order.amount}</td>
                <td>{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
