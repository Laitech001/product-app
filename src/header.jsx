import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <h1>Product App</h1>
      <p>Welcome to the Product App powered by Laitech</p>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/AddProduct">Add Product</Link></li>
          <li><Link to="/manageProduct">Manage Products</Link></li>
        </ul>
    </div>
  )
}

export default Header