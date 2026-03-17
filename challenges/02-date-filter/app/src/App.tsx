import { useState } from 'react'
import { stats, recentOrders, type Order } from './data'
import './App.css'

function filterOrders(orders: Order[], startDate: string, endDate: string): Order[] {
  if (!startDate || !endDate) return orders
  return orders.filter((order) => {
    // Bug 1: exclusive bounds (should be >= and <= for inclusive)
    // Bug 2: compare order.id to endDate instead of order.date
    return order.date >= startDate && order.date <= endDate
  })
}

function App() {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [displayedOrders, setDisplayedOrders] = useState<Order[]>(recentOrders)

  const handleApply = () => {
    setDisplayedOrders(filterOrders(recentOrders, startDate, endDate))
  }

  const handleClear = () => {
    setStartDate('')
    setEndDate('')
    setDisplayedOrders(filterOrders(recentOrders, startDate, endDate))
    // Bug 3: never reset displayedOrders to full list
  }

  return (
    <div className="app">
      <h1 className="title">Sales dashboard</h1>

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
      <div className="filterRow">
        <label>
          From{' '}
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            aria-label="Filter from date"
          />
        </label>
        <label>
          To{' '}
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            aria-label="Filter to date"
          />
        </label>
        <button type="button" className="primary" onClick={handleApply}>
          Apply
        </button>
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div className="tableWrap">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Date</th>
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
