import React, { useEffect, useState } from "react";
import "./App.css";
import { getOrderById } from "./utils/requests";

export const ORDER_ID = "UK1876YH08_2";

function App() {
  const [order, setOrder] = useState(null);

  const fetchOrderById = (id: string) => {
    return getOrderById(id)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  };

  useEffect(() => {
    fetchOrderById(ORDER_ID);
  }, []);

  return (
    <div>
      <header>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-white">
          Order: {ORDER_ID}
        </h1>

        {order != null ? (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {JSON.stringify(order)}
          </p>
        ) : null}
      </header>
    </div>
  );
}

export default App;
