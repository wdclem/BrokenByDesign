import { useMemo, useState } from 'react'
import './App.css'
import { baseOrders, refreshedOrders, stats, type Order } from './data'

interface TopCustomer {
  id: string
  name: string
  total: number
}

function computeTopCustomers(orders: Order[]): TopCustomer[] {
  const perCustomer = new Map<string, TopCustomer>()

  for (const order of orders) {
    if (!order.customer) continue
    perCustomer.set(order.customer.id, {
      id: order.customer.id,
      name: order.customer.name,
      total: order.amount, // BUG 1: overwrites total instead of summing
    })
  }

  return Array.from(perCustomer.values())
    .sort((a, b) => a.name.localeCompare(b.name)) // BUG 2: sorted alphabetically instead of total desc
    .slice(0, 3)
}

function App() {
  const [orders, setOrders] = useState<Order[]>(baseOrders)

  const topCustomers = useMemo(() => computeTopCustomers(orders), []) // BUG 3: stale, never recomputed when orders change

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

      <div className="grid">
        <section className="panel">
          <h2 className="sectionTitle">Recent orders</h2>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer?.name ?? '—'}</td>
                  <td>${order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="smallBtn" onClick={() => setOrders(refreshedOrders)}>
            Refresh data
          </button>
        </section>

        <aside className="panel">
          <h2 className="sectionTitle">Top customers</h2>
          <ul className="topList">
            {topCustomers.map((customer, index) => (
              <li key={index}>
                {/* BUG 4: shows customer id instead of display name and unstable key */}
                <strong>{customer.id}</strong> — ${customer.total}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  )
}

export default App
