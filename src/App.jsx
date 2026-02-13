import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import './index.css'
import Header from './header'
import Products from './products'
import AddProduct from './AddProduct'
import ManageProduct from './manageProduct'

function App() {

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path='/AddProduct' element={<AddProduct />} />
        <Route path='/manageProduct' element={<ManageProduct />} />
      </Routes>

    </div>
  )
}

export default App
