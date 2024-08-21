import React from "react";

function OrderList({ orders }) {
  return (
    <div className="max-h-96 overflow-y-auto bg-white p-6 rounded-lg shadow-lg ring-2 ring-orange-300 ring-offset-4 ring-offset-white">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-600">
        Order List
      </h2>
      <ul>
        {orders.map((order, index) => (
          <li key={order.id} className="border-b border-gray-300 py-2">
            <p className="text-lg font-semibold text-gray-800">
              Order #{index + 1}: {order.customer.name} ordered {order.quantity}{" "}
              x {order.meal_name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderList;
