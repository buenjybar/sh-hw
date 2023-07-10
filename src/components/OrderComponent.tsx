import { Order } from "../models/all";

function OrderComponent({ order }: { order: Order }) {
  return (
    <div className="flex p-4 mb-2 bg-slate-50 rounded-md">
      <span className="text-l">
        {order.firstName} {order.lastName}
      </span>
      <div className="ml-4">
        {order.trackers.length > 0
          ? order.trackers.map((tracker) => (
              <span
                key={tracker.id}
                className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
              >
                the id {tracker.id} is {tracker.status}
              </span>
            ))
          : null}
      </div>
    </div>
  );
}

export default OrderComponent;
