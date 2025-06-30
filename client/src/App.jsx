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
import CheckAuth from './components/common/check-auth'
import UnauthPage from './pages/unauth-page'


const App = () => {
  const isAuthenticated = true; //
  // u Replace with actual authentication logic
  // const user = null;
  const user = {
    name : "John Doe",
    role : "user",


  } // Replace with actual user data
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <Routes>
        <Route path="/auth" element={<CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <AuthLayout />
        </CheckAuth>}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route path = "/admin" element = {<CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <AdminLayout/>
        </CheckAuth>}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="product" element={<AdminProducts />} />
          <Route path="sidebar" element={<AdminSidebar />} />
          <Route path="orders" element={<AdminOrders />} />
        
        </Route>
        <Route path = "/shop" element = {<CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <ShopingLayout />
        </CheckAuth>}>
          <Route path="home" element={<ShopingHome />} />
          <Route path="listing" element={<ShopingListing />} />
          <Route path="checkout" element={<ShopingCheckout />} />
          <Route path="account" element={<ShopingAccount />} />


        </Route>
      <Route path = "*" element = {<NotFound/>} />
      <Route path = "/unauth" element = {<UnauthPage/>}/>

      </Routes>
    </div>
  )
}

export default App
