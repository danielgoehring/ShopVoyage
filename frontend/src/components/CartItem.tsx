const CartItem = ({
  productCartImg,
  productCartName,
  productCartPrice,
  size,
  setInputValue,
  inputValue,
  removeItem,
}) => {
  // Function to handle button click
  const handleButtonClick = () => {
    // Increment the input value by 1 when the button is clicked
    setInputValue((prevValue) => Math.min(prevValue + 1, 100)); // Ensure it doesn't exceed the max value
  };

  // Function to handle manual input change
  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    // Update the state only if the value is a valid number within the range
    if (!isNaN(value) && value >= 0 && value <= 100) {
      setInputValue(value);
    }
  };
  // console.log("size: " + size);
  return (
    <div className="">
      <div className="w-full w-[1476px] mb-4">
        <hr className="border-t-1 border-gray-200 " />
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-6">
          <img src={productCartImg} className="w-[70px] h-[80px]" />
          <div className="">
            <p className="text-sm font-semibold mb-1">{productCartName}</p>
            <div className="flex gap-5 items-center">
              <p className="font-semibold">${productCartPrice}</p>
              <p className="px-[7px] py-[1px] bg-gray-100 border border-gray-200">
                {size}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="number"
            min="0"
            max="100"
            step="1"
            className="border w-10 px-[4px] py-[4px]"
            value={inputValue}
            onChange={handleInputChange}
          />
          <div className="mr-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="currentColor"
              class="bi bi-trash cursor-pointer"
              viewBox="0 0 16 16"
              onClick={removeItem}
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-full w-[1476px]">
        <hr className="border-t-1 border-gray-200 " />
      </div>
    </div>
  );
};

export default CartItem;
