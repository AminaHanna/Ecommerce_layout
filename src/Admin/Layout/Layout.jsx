import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex gap-10 bg-green-300 w-[100%]">
      <div className="w-[300px] bg-green-500 h-screen pt-14">
        <ul className="p-5">
          <li className="hover:bg-white p-2 rounded-lg">
            <Link to={"/admin/home"}>Home</Link>
          </li>
          <li className="hover:bg-white p-2 rounded-lg">
            <Link to={"/admin/profile"}>Profile</Link>
          </li>
          <li className="hover:bg-white p-2 rounded-lg">
            <Link to={"/admin/carts"}>Cart</Link>
          </li>
          <li className="hover:bg-white p-2 rounded-lg">
            <Link to={"/admin/transactions"}>Transactions</Link>
          </li>
          <li className="hover:bg-white p-2 rounded-lg">
            <Link to={"/admin/products"}>Product</Link>
          </li>
        </ul>
      </div>
      <div className="">
        <Outlet />
        <h1>Admin layout</h1>
      </div>
    </div>
  );
}

export default Layout;
