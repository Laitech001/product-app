import React from 'react'
import { useEffect, useState } from 'react'
import './AddProduct.css'
import { useNavigate} from 'react-router-dom'

function AddProduct() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    image: '',
    specs: {
      ram: '',
      storage: '',
      processor: ''
    }
  })
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      ...product,
      price: Number(product.price),
    };

    try {
      const res = await fetch('http://localhost:3001/products', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (res.ok) {
        alert("Product added successfully!");
        setProduct({ 
          image: "", 
          name: "", 
          price: Number(""), 
          specs: { 
            ram: "", 
            storage: "", 
            processor: "" 
          } 
        });
        navigate('/');
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };


  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Add a New Product</h2>
        <input 
          type="text"
          placeholder="Product Name"
          value={product.name}
          onChange={e => setProduct({...product, name: e.target.value})}
          required
        />

        <input
          type="number"
          placeholder="Product Price"
          value={product.price}
          onChange={(e) => { setProduct({ ...product,
            price: e.target.value,
          });
          }}
          required
        />


        <input 
          type="text"
          placeholder="Product Image URL"
          value={product.image}
          onChange={e => setProduct({...product, image: e.target.value})}
          required
        />

        <input 
          type="text"
          placeholder="RAM"
          value={product.specs.ram}
          onChange={e => setProduct({...product, specs: {...product.specs, ram: e.target.value}})}
          required
        />

        <input 
          type="text"
          placeholder="Storage"
          value={product.specs.storage}
          onChange={e => setProduct({...product, specs: {...product.specs, storage: e.target.value}})}
          required
        />

        <input 
          type="text"
          placeholder="Processor"
          value={product.specs.processor}
          onChange={e => setProduct({...product, specs: {...product.specs, processor: e.target.value}})}
        />  

        <button type="submit">Add Product</button>
      </form>
    </div>
    
  )
}

export default AddProduct