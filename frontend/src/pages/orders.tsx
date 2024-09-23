import { useEffect, useState } from "react";

const Orders = () => {
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    // Retrieve the order details from localStorage
    const storedOrderDetails = JSON.parse(localStorage.getItem("orderDetails"));
    if (storedOrderDetails) {
      setOrderDetails(storedOrderDetails);
    }
  }, []);

  return (
    <div className="py-6 mb-44">
      <h1 className="text-2xl font-semibold mb-4">MY ORDERS</h1>
      <hr className=" border-gray-300" />

      {orderDetails && orderDetails.cartItems?.length > 0 ? (
        orderDetails.cartItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-gray-300 py-4"
          >
            <div className="flex items-center gap-5">
              <img
                src={item.productCartImg}
                alt={item.productCartName}
                className="w-20 h-20 object-cover"
              />
              <div>
                <h2 className="font-semibold text-lg mb-1">
                  {item.productCartName}
                </h2>
                <div className="flex gap-1 sm:gap-3 items-center mb-1">
                  <p className="text-gray-600 font-semibold">
                    ${item.productCartPrice}
                  </p>
                  <p className="text-sm">Quantity: {item.inputValue}</p>
                  <p className="text-sm">Size: {item.size}</p>
                </div>
                <p className="text-gray-500 text-sm">
                  Date: {orderDetails.orderDate}
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
              <span className="text-green-600 text-sm font-medium flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="currentColor"
                  className="bi bi-circle-fill mr-1"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
                <div>{orderDetails.status}</div>
              </span>
              <button className="border border-gray-300 px-4 py-2 text-sm">
                Track Order
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No orders found</p>
      )}
    </div>
  );
};

export default Orders;
