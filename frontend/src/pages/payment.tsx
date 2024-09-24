import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Payment = () => {
  const router = useRouter();
  const [subtotal, setSubtotal] = useState(0);
  const [shippingFee, setShippingFee] = useState(0);
  const [total, setTotal] = useState(0);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    // Retrieve the cart items from localStorage
    const storedCartItems = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    );
    if (storedCartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(storedCartItems)); // Ensure it's stored in case of refresh
    }

    if (
      router.query.subtotal &&
      router.query.shippingFee &&
      router.query.total
    ) {
      setSubtotal(parseFloat(router.query.subtotal as string));
      setShippingFee(parseFloat(router.query.shippingFee as string));
      setTotal(parseFloat(router.query.total as string));
    }
  }, [router.query]);

  const handlePlaceOrder = () => {
    // Retrieve cartItems from localStorage with a fallback to an empty array
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

    if (!cartItems || cartItems.length === 0) {
      alert("No items in the cart.");
      return;
    }

    // Store the order details in localStorage
    const orderDetails = {
      cartItems,
      subtotal,
      shippingFee,
      total,
      orderDate: new Date().toLocaleDateString(),
      status: "Ready to ship",
    };

    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));

    // Clear cartItems from localStorage now that the order is placed
    localStorage.removeItem("cartItems");

    // Redirect to the orders page
    router.push("/orders");
  };

  return (
    <div className="mb-40">
      <div className="w-full w-[1476px] mb-8">
        <hr className="border-t-1 border-gray-200 " />
      </div>
      <div className="mb-12">
        <h1 className="text-xl font-semibold">DELIVERY INFORMATION</h1>
      </div>
      <div className="sm:flex justify-between gap-4 ">
        <div className="sm:w-[500px]">
          <div className="flex mb-4 ">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border rounded-md border-gray-300 p-2 mr-4 w-full"
              placeholder="First name"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border rounded-md border-gray-300 p-2 w-full"
              placeholder="Last name"
            />
          </div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-md border-gray-300 p-2 w-full mb-4"
            placeholder="Email address"
          />
          <input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            className="border rounded-md border-gray-300 p-2 w-full mb-4"
            placeholder="Street"
          />
          <div className="flex mb-4">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border rounded-md border-gray-300 p-2 mr-4 w-full"
              placeholder="City"
            />
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="border rounded-md border-gray-300 p-2 w-full"
              placeholder="State"
            />
          </div>
          <div className="flex mb-4">
            <input
              type="text"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
              className="border rounded-md border-gray-300 p-2 mr-4 w-full"
              placeholder="Zipcode"
            />
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="border rounded-md border-gray-300 p-2 w-full"
              placeholder="Country"
            />
          </div>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border rounded-md border-gray-300 p-2 w-full mb-44"
            placeholder="Phone"
          />
        </div>

        <div className="sm:w-[550px]">
          <div className="mb-7">
            <h1 className="text-xl font-semibold">CART TOTALS</h1>
          </div>
          <div className="flex justify-between">
            <p className="text-sm mb-2">Subtotal</p>
            <p className="">${subtotal.toFixed(2)}</p>
          </div>

          <div className="w-full w-[1476px] mb-2">
            <hr className="border-t-1 border-gray-200 " />
          </div>
          <div className="flex justify-between">
            <p className="text-sm mb-2">Shipping Fee</p>
            <p className="">${shippingFee.toFixed(2)}</p>
          </div>
          <div className="w-full w-[1476px] mb-2">
            <hr className="border-t-1 border-gray-200 " />
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-sm mb-2">Total</p>
            <p className="font-bold">${total.toFixed(2)}</p>
          </div>

          <div className="my-12">
            <h1 className="text-lg font-semibold mb-4">PAYMENT METHOD</h1>
            <div className="sm:flex items-center gap-2">
              <div className="border py-[10px] px-3 mb-3 sm:mb-0 flex gap-4 sm:w-[200px]">
                <input type="radio" name="paymentMethod" />

                <img
                  src="\images\PayPal.svg.png"
                  className="w-[90px] h-[25px]"
                />
              </div>
              <div className="border py-[12.5px] px-3 mb-3 flex sm:mb-0 gap-4 sm:w-[200px]">
                <input type="radio" name="paymentMethod" />
                <img
                  src="\images\Apple_Pay_logo.svg.png"
                  className="w-[50px] h-[20px]"
                />
              </div>
              <div className="border py-[10.8px] px-3 flex gap-4 sm:mb-0 font-semibold sm:w-[200px]">
                <input type="radio" name="paymentMethod" />
                <div>CREDIT CARD</div>
              </div>
            </div>
          </div>

          <div className="text-right">
            <button
              className="bg-black text-white py-[12.8px] px-14 offerbtn-mobile"
              onClick={handlePlaceOrder}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
