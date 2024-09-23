import CartItem from "../components/CartItem";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Cart = ({
  productCartImg,
  productCartName,
  productCartPrice,
  size,
  setInputValue,
  inputValue,
  cartItems,
  setCartItems,
  setcounter,
  counter,
}) => {
  console.log(cartItems);
  const [subtotal, setSubtotal] = useState(0);
  const shippingFee = 5.0; // Example fixed shipping fee (you can adjust this)
  const total = subtotal + shippingFee;

  const router = useRouter();

  // Calculate the subtotal whenever cartItems changes
  useEffect(() => {
    const newSubtotal = cartItems.reduce(
      (acc, item) => acc + item.productCartPrice * item.inputValue,
      0
    );
    setSubtotal(newSubtotal);
  }, [cartItems]);

  const handleRemoveItem = (id) => {
    // Filter out the item with the given id
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);

    setcounter(counter - 1);
  };

  const handleProceedToPayment = () => {
    // Save the cart items to localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Navigate to the payment page with query parameters
    router.push({
      pathname: "/payment",
      query: { subtotal, shippingFee, total },
    });
  };

  console.log(productCartPrice);
  return (
    <div>
      <div className="w-full w-[1476px] mb-14">
        <hr className="border-t-1 border-gray-200 " />
      </div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold">YOUR CART</h1>
      </div>
      <div>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            productCartImg={item.productCartImg}
            productCartName={item.productCartName}
            productCartPrice={item.productCartPrice}
            size={item.size}
            setInputValue={(newValue) => {
              const updatedItems = cartItems.map((cartItem) =>
                cartItem.id === item.id
                  ? { ...cartItem, inputValue: newValue }
                  : cartItem
              );
              setCartItems(updatedItems);
            }}
            inputValue={item.inputValue}
            removeItem={() => handleRemoveItem(item.id)}
          />
        ))}
      </div>

      {/* <CartItem
        productCartImg={productCartImg}
        productCartName={productCartName}
        productCartPrice={productCartPrice}
        size={size}
        setInputValue={setInputValue}
        inputValue={inputValue}
      /> */}

      <div className="sm:flex justify-end mb-44">
        <div className="sm:w-[500px] w-full">
          <div className="mb-12 mt-24">
            <h1 className="text-2xl font-semibold">CART TOTALS</h1>
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
          <div className="flex justify-between mb-7">
            <p className="text-sm mb-2">Total</p>
            <p className="font-bold">${total.toFixed(2)}</p>
          </div>
          <div className="text-right">
            <button
              className="bg-black text-white py-[12.8px] px-8 offerbtn-mobile"
              onClick={handleProceedToPayment}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
