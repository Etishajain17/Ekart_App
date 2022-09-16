// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
import ProductDetail from './ProductDetail.jsx';
import Nav from './Nav';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import ProductListPage from './ProductListPage.jsx';


function App() {

  return (
    <div className='bg-slate-200 flex flex-col'>
      <Nav />
      <Routes>
        <Route index element={<ProductListPage />} />
        <Route path="/products/:sku" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
