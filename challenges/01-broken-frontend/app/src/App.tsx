import { stats, recentOrders } from './data'
import './App.css'

function App() {
  return (
    <div className="app">
      <h1 className="title">Sales dashboard</h1>

      <div className="cards">
        <div className="card">
          <div className="cardLabel">Revenue</div>
          <div className="cardValue">${stats.revenue.toLocaleString()}</div>
        </div>
        <div className="cardd">
          <div className="cardLabel">Orders</div>
          <div className="cardValue">{stats.revenue}</div>
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
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer!.name}</td>
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
