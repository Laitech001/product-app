import React from 'react'
import { useEffect, useState } from 'react'
import './products.css'

function Products() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setProducts(data)
        setLoading(false)})
      .catch(error => {
        console.error('Error fetching products:', error)
        setLoading(false)})
    }, 600)
    
  }, [])

  return (

    <div className='products-container'>
        <h2>Product Lists</h2>

      <div className="products-list">
        {loading ? <p>Loading products...</p> : products.length === 0 ? 
          <p>No products available</p> : 
          products.map(p => (
            <div key={p.id} className='card'>
              <div className='image-container'>
              <img src={p.image} alt={p.name} width={100} />
              </div>
              <h3>{p.name}</h3>
              <p className="product-specs">{`${p.specs.ram}, ${p.specs.storage}, ${p.specs.processor}`}</p>
              <p className="product-price">Price: {p.price.toLocaleString('en-NG', { style: 'currency', currency: 'NGN' })}</p>
              <section className='actions'>
                <button className='buy-btn'>Buy Now</button>
                <button className='add-to-cart-btn'>Add to Cart</button>
              </section>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Products