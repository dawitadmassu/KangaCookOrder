import React, { useState } from "react";
import axios from "axios";

function OrderForm({ onOrderCreated }) {
  const [mealName, setMealName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      meal_name: mealName,
      quantity,
      customer: {
        name: customerName,
        phone_number: phoneNumber,
      },
    };

    axios
      .post("http://localhost:8000/api/orders/", order)
      .then((response) => {
        console.log("Order saved:", response.data);
        setMealName("");
        setQuantity(1);
        setCustomerName("");
        setPhoneNumber("");
        onOrderCreated(); // Refresh both orders and customers
      })
      .catch((error) => console.error("Error saving order:", error));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" bg-white p-8 rounded-lg shadow-lg ring-2 ring-orange-300 ring-offset-4 ring-offset-white"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-green-600">
        Place Your Order
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            className="block text-gray-800 text-sm font-bold mb-2"
            htmlFor="mealName"
          >
            Meal Name
          </label>
          <input
            type="text"
            id="mealName"
            value={mealName}
            onChange={(e) => setMealName(e.target.value)}
            placeholder="Enter meal name"
            required
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label
            className="block text-gray-800 text-sm font-bold mb-2"
            htmlFor="quantity"
          >
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter quantity"
            min="1"
            required
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label
            className="block text-gray-800 text-sm font-bold mb-2"
            htmlFor="customerName"
          >
            Customer Name
          </label>
          <input
            type="text"
            id="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Enter customer name"
            required
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <label
            className="block text-gray-800 text-sm font-bold mb-2"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
            required
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
      <div className="text-center mt-6">
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:shadow-outline"
        >
          Place Order
        </button>
      </div>
    </form>
  );
}

export default OrderForm;
