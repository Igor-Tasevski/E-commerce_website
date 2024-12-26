import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './Routes/HomePage'
import Layout from './Routes/Layout'
import LoginPage from './Routes/LoginPage'
import ProductsByIDPage from './Routes/ProductsByIDPage'
import Products from './Routes/Products'
import Aboutus from './Routes/Aboutus'
import Contact from './Routes/Contact'
import Promotions from './Routes/Promotions'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/*<Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<HomePage />} /> 
          <Route path="/login" element={<LoginPage />} />
          <Route path ="/products" element = {<Products/>} />
          <Route path="/products/:id" element={<ProductsByIDPage />} />
          <Route path ="/about" element = {<Aboutus/>} />
          <Route path ="/contact" element = {<Contact />} />
          <Route path ="/promotions" element = {<Promotions />} />
        </Route>

      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
