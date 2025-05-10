import React, { useState } from 'react';
import '../styles/InvoiceGenerator.scss';   

const InvoiceGenerator = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  
  const handleAddItem = () => {
    if (!item || quantity <= 0 || price <= 0) return;

    const newItem = { item, quantity, price, total: quantity * price };
    setItems([...items, newItem]);
    setItem('');
    setQuantity(1);
    setPrice(0);
  };

  const totalAmount = items.reduce((acc, curr) => acc + curr.total, 0);

  return (
    <div className="invoiceWrapper">
      <div className="invoiceHeader">
        <div>
          <input
            type="text"
            value={customerName}
            placeholder="Customer Name"
            onChange={(e) => setCustomerName(e.target.value)}
          />
          <input
            type="email"
            value={customerEmail}
            placeholder="Customer Email"
            onChange={(e) => setCustomerEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            value={item}
            placeholder="Item Name"
            onChange={(e) => setItem(e.target.value)}
          />
          <input
            type="number"
            value={quantity}
            placeholder="Quantity"
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <input
            type="number"
            value={price}
            placeholder="Price per Item"
            onChange={(e) => setPrice(Number(e.target.value))}
          />
          <button onClick={handleAddItem}>Add Item</button>
        </div>
      </div>

      <table className="itemsList">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.item}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="totalAmount">
        <div className="label">Total Amount:</div>
        <div className="amount">${totalAmount.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default InvoiceGenerator;
