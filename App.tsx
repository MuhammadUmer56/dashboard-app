import React, { useState } from "react"
import "./App.css"

interface Item {
  userName: string
  name: string
  amount: string
  qty: number
  orderNumber: number
}

function App() {
  const [userName, setUserName] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [amount, setAmount] = useState<string>("")
  const [qty, setQty] = useState<number>(1)
  const [items, setItems] = useState<Item[]>([])
  const [orderNumber, setOrderNumber] = useState<number>(1)

  const handleAddItem = (): void => {
    if (!userName || !name || !amount || qty <= 0) {
      alert("Please fill in all fields correctly.")
      return
    }

    const newItem: Item = { userName, name, amount, qty, orderNumber }
    setItems([...items, newItem])

    setOrderNumber(orderNumber + 1)

    setUserName("")
    setName("")
    setAmount("")
    setQty(1)
  }

  return (
    <div className="app">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">
          <img
            src="https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png"
            alt="Logo"
            className="logo-img"
          />
        </div>
        <div className="profile">Profile</div>
        <div className="links">
          <ul>
            <li>
              <a href="#">Users</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Orders</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="user-product-orders">
          <div className="users">Users</div>
          <div className="products">Products</div>
          <div className="orders">Orders</div>
        </div>

        {/* Add Item Section */}
        <div className="add-item-section">
          <input
            type="text"
            placeholder="User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Item Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="number"
            placeholder="Quantity"
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
          />
          <button onClick={handleAddItem}>Add</button>
        </div>

        {/* List Box */}
        <div className="list-box">
          <table>
            <thead>
              <tr>
                <th>Order No</th>
                <th>User Name</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 ? (
                <tr>
                  <td colSpan={5}>No items added yet</td>
                </tr>
              ) : (
                items.map((item) => (
                  <tr key={item.orderNumber}>
                    <td>{item.orderNumber}</td>
                    <td>{item.userName}</td>
                    <td>{item.name}</td>
                    <td>{item.qty}</td>
                    <td>{item.amount}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App
