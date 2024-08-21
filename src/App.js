import React, { useState, useEffect } from "react";
import OrderForm from "./components/OrderForm";
import OrderList from "./components/OrderList";
import CustomersList from "./components/CustomersList";
import axios from "axios";

function App() {
  const [customers, setCustomers] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch customers and orders on initial load
    fetchCustomers();
    fetchOrders();
  }, []);

  const fetchCustomers = () => {
    axios
      .get("http://localhost:8000/api/customers/")
      .then((response) => setCustomers(response.data))
      .catch((error) => console.error("Error fetching customers:", error));
  };

  const fetchOrders = () => {
    axios
      .get("http://localhost:8000/api/orders/")
      .then((response) => setOrders(response.data))
      .catch((error) => console.error("Error fetching orders:", error));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-green-700 text-center mb-8 drop-shadow-lg">
        KangaCook Order Application
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <OrderForm
          onOrderCreated={() => {
            fetchOrders();
            fetchCustomers();
          }}
        />
        <CustomersList customers={customers} />
      </div>
      <div className="mt-6">
        <OrderList orders={orders} />
      </div>
    </div>
  );
}

export default App;
