import './App.css'
import { recentOrders, stats } from './data'

function App() {
  return (
    <div className="app">
      <div className="title">Sales Dashboard</div>

      <div className="cards">
        <div className="card">
          <div className="cardValue">${stats.revenue.toLocaleString()}</div>
        </div>
        <div className="card">
          <div className="cardValue">{stats.ordersCount}</div>
        </div>
        <div className="card">
          <div className="cardValue">{stats.customers}</div>
        </div>
      </div>

      <div className="sectionTitle">Recent orders</div>
      <div className="tableWrap">
        <table className="table">
          <thead>
            <tr>
              <td>ID</td>
              <td>Customer</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer?.name ?? '—'}</td>
                <td>${order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <label style={{ display: 'none' }}>Search customer</label>
        <input placeholder="Search customer" />
        <div className="iconBtn" tabIndex={-1}>
          🔎
        </div>
      </div>
    </div>
  )
}

export default App
