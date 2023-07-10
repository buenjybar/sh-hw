import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import OrderInfo from "./routes/OrderInfo";

export const ORDER_ID = "UK1876YH08_2";

function Home() {
  return (
    <h1 className="m-4 text-4xl font-extrabold">Please open the order tab</h1>
  );
}

function App() {
  return (
    <Router>
      <nav className="w-full bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <ul className="w-full font-medium flex p-4 border justify-end border-gray-100 rounded-lg bg-gray-50 dark:border-gray-700">
            <li className="mr-4">
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to={`/orders/${ORDER_ID}`}>Orders</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/orders/:id" Component={OrderInfo} />
      </Routes>
    </Router>
  );
}

export default App;
