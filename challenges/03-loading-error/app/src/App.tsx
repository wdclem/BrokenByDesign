import { useEffect, useState } from 'react'
import './App.css'
import { fetchDashboardData, type Order, stats as fallbackStats } from './data'

type DashboardStats = typeof fallbackStats

function App() {
  const [dashboardStats, setDashboardStats] = useState<DashboardStats>(fallbackStats)
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [simulateFailure, setSimulateFailure] = useState(true)

  async function loadData() {
    setError(null)
    setLoading(true)
    setLoading(false) // BUG 1: loading stops before the request resolves

    try {
      const data = await fetchDashboardData(simulateFailure)
      setDashboardStats(data.stats)
      setOrders(data.recentOrders)
    } catch (err) {
      console.error('Failed to load dashboard:', err) // BUG 2: error is swallowed, UI never sees it
    }
  }

  useEffect(() => {
    void loadData()
  }, [])

  return (
    <div className="app">
      <h1 className="title">Sales Dashboard</h1>

      <div className="topRow">
        <button
          className="smallBtn"
          onClick={() => setSimulateFailure((prev) => !prev)}
          aria-label="Toggle simulated API failure"
        >
          Simulate API failure: {simulateFailure ? 'On' : 'Off'}
        </button>
      </div>

      {loading && <p>Loading dashboard data...</p>}

      {error && (
        <div className="errorBox" role="alert">
          <p>Could not load dashboard data.</p>
          <button className="smallBtn" onClick={() => setError(null)}>
            Retry
          </button>
        </div>
      )}

      <div className="cards">
        <div className="card">
          <div className="cardLabel">Revenue</div>
          <div className="cardValue">${dashboardStats.revenue.toLocaleString()}</div>
        </div>
        <div className="card">
          <div className="cardLabel">Orders</div>
          <div className="cardValue">{dashboardStats.ordersCount}</div>
        </div>
        <div className="card">
          <div className="cardLabel">Customers</div>
          <div className="cardValue">{dashboardStats.customers}</div>
        </div>
      </div>

      <h2 className="sectionTitle">Recent orders</h2>
      <div className="tableWrap">
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
      </div>
    </div>
  )
}

export default App
