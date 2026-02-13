import { useEffect, useState } from 'react'
import './manageProduct.css'

function ManageProduct() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    try {
      fetch ('http://localhost:3001/products')
      .then(res => res.json())
      .then(data => setProducts(data))
    } catch (err) {
      console.log(err);
    } 
  }, [])

  const handleDelete = async (id) => {
    await fetch (`http://localhost:3001/products/${id}`, {
    method: "DELETE",
  });

  setProducts(products.filter(p => p.id !== id));
  }

  return (
    <div className="manage-product">
      <h1>Manage product</h1>

      {products.map(p => (
        <div key={p.id} className="product-card">
          <div className="top">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
          </div>

          <div className="bottom">
            <p>{p.price.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}</p>
            <button onClick={() => handleDelete(p.id)} className="delete-btn">Delete</button>
          </div>
          
        </div>
      ))}
    </div>
  )
}

export default ManageProduct