import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './components/auth/layout'
import AuthLogin from './pages/auth/login'
import AuthRegister from './pages/auth/register'
import AdminLayout from './components/admin-view/layout'
import AdminSidebar from './components/admin-view/sidebar'
import AdminOrders from './pages/admin-view/orders';
import AdminProducts from './pages/admin-view/product'
import AdminDashboard from './pages/admin-view/dashboard'
import ShopingLayout from './components/shoping-view/layout'
import NotFound from './pages/not-found'
import ShopingHome from './pages/shoping-view/home'
import ShopingListing from './pages/shoping-view/listing'
import ShopingCheckout from './pages/shoping-view/checkout'
import ShopingAccount from './pages/shoping-view/account'





const App = () => {
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route path = "/admin" element = {<AdminLayout/>}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="product" element={<AdminProducts />} />
          <Route path="sidebar" element={<AdminSidebar />} />
          <Route path="orders" element={<AdminOrders />} />
        
        </Route>
        <Route path = "/shop" element = {<ShopingLayout/>}>
          <Route path="home" element={<ShopingHome />} />
          <Route path="listing" element={<ShopingListing />} />
          <Route path="checkout" element={<ShopingCheckout />} />
          <Route path="account" element={<ShopingAccount />} />


        </Route>
      <Route path = "*" element = {<NotFound/>} />

      </Routes>
    </div>
  )
}

export default App
