import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AdminCart,
  AdminHome,
  AdminLayout,
  AdminLogin,
  AdminProduct,
  AdminProfile,
  AdminSignup,
  AdminTransactions,
  AdminUsers,
} from "./Admin";

function App() {
  return (
    <BrowserRouter>
      {/* admin routes start */}
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="home" element={<AdminHome />} />
          <Route path="products" element={<AdminProduct />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="transactions" element={<AdminTransactions />} />
          <Route path="carts" element={<AdminCart />} />
          <Route path="profile" element={<AdminProfile/>} />
        </Route>
        <Route path="admin-login" element={<AdminLogin />} />
        <Route path="admin-register" element={<AdminSignup />} />
      </Routes>
      {/* admin routes end */}
    </BrowserRouter>
  );
}

export default App;
