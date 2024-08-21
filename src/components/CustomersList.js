import React from "react";

function CustomersList({ customers }) {
  return (
    <div className="max-h-96 overflow-y-auto bg-white p-6 rounded-lg shadow-lg ring-2 ring-green-300 ring-offset-4 ring-offset-white">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-600">
        Customers List
      </h2>
      <ul>
        {customers.slice(0, 8).map((customer) => (
          <li key={customer.id} className="border-b border-gray-300 py-2">
            <p className="text-lg font-semibold text-gray-800">
              {customer.name}
            </p>
            <p className="text-sm text-gray-600">{customer.phone_number}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomersList;
