import { useEffect, useState } from "react";
import { getOrderById } from "../utils/requests";
import { useParams } from "react-router-dom";
import { Order } from "../models/all";
import OrderComponent from "../components/OrderComponent";

function OrderInfo() {
  const { id: orderId } = useParams();
  const [orders, setOrders] = useState<Order[]>([]);

  const fetchOrdersById = (id: string) => {
    return getOrderById(id).then((data) => setOrders(data));
  };

  useEffect(() => {
    if (orderId) fetchOrdersById(orderId);
  }, [orderId]);

  if (!orderId) {
    return <div>Something went wrong</div>;
  }

  return (
    <div>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-white">
        Orders: {orderId}
      </h1>

      {orders != null ? (
        <div className="flex flex-col">
          {orders.map((order, idx) => (
            <OrderComponent key={idx} order={order}></OrderComponent>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default OrderInfo;
