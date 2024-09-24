// Define the structure of a single cart item
interface CartItemType {
  id: number;
  productCartImg: string;
  productCartName: string;
  productCartPrice: number;
  size: string;
  inputValue: number;
}

// Define the props for the ProductPage component
interface ProductPageProps {
  setcounter: React.Dispatch<React.SetStateAction<number>>;
  counter: number;
  setProductCartImg: (img: string) => void;
  setProductCartName: (name: string) => void;
  setProductCartPrice: (price: number) => void;
  setSize: (size: string) => void;
  size: string;
  setInputValue: (value: number) => void;
  inputValue: number;
  productCartImg: string;
  productCartName: string;
  productCartPrice: number;
  cartItems: CartItemType[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>;
}

// pages/productpage/[id].tsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Products1 } from "../../utils/fetchProduct1"; // Adjust the import path
import Image from "next/image";

const ProductPage: React.FC<ProductPageProps> = ({
  setcounter,
  counter,
  setProductCartImg,
  setProductCartName,
  setProductCartPrice,
  setSize,
  size,
  setInputValue,
  inputValue,
  productCartImg,
  productCartName,
  productCartPrice,
  cartItems,
  setCartItems,
}) => {
  const [product, setProduct] = useState<Products1 | null>(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [isHighlighted, setIsHighlighted] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;

      try {
        const response = await fetch(
          `http://localhost:5001/api/products1/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  console.log(product.imageurl);

  const handleAddtoCart = () => {
    setcounter(counter + 1);

    const existingProductIndex = cartItems.findIndex(
      (item) => item.productCartName === product.name && item.size === size
    );

    if (existingProductIndex >= 0) {
      // Product already exists, increment the quantity
      const updatedCartItems = cartItems.map((item, index) =>
        index === existingProductIndex
          ? { ...item, inputValue: item.inputValue + 1 }
          : item
      );
      setCartItems(updatedCartItems);
    } else {
      // Product doesn't exist, add it with an initial quantity of 1
      const newItem = {
        id: cartItems.length + 1, // Generate a unique id
        productCartImg: product.imageurl,
        productCartName: product.name,
        productCartPrice: product.price,
        size: size, // Ensure size is set correctly
        inputValue: 1, // Set initial quantity to 1
      };

      // Add the new item to the cart array
      setCartItems((prevItems) => [...prevItems, newItem]);
    }

    setIsHighlighted(true);
    setTimeout(() => {
      setIsHighlighted(false);
    }, 100); // Remove highlight after 300ms (you can adjust this value)
  };

  const handleImg = () => {
    setProductCartImg((counter + 1).toString());
  };

  const handleName = () => {
    setProductCartName((counter + 1).toString());
  };

  const handlePrice = () => {
    setProductCartPrice(counter + 1);
  };

  const handleSizeS = () => {
    setSize("S");
    setSelectedSize("S");
  };

  const handleSizeM = () => {
    setSize("M");
    setSelectedSize("M");
  };

  const handleSizeL = () => {
    setSize("L");
    setSelectedSize("L");
  };

  const handleSizeXL = () => {
    setSize("XL");
    setSelectedSize("XL");
  };

  const handleSizeXXL = () => {
    setSize("XXL");
    setSelectedSize("XXL");
    console.log("size xxl: " + size);
  };

  const handleButtonClick = () => {};

  const addItemToCart = () => {};

  return (
    <div className="">
      <div className="w-full w-[1476px] mb-10">
        <hr className="border-t-1 border-gray-300 " />
      </div>
      <div className="mobile-productpage">
        <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:gap-1">
          {" "}
          {/* Adjust gap on large screens */}
          {/* Smaller Thumbnail Image */}
          <div className="flex flex-col sm:mr-2 mt-4 sm:mt-0">
            {" "}
            {/* Margin on mobile, remove on larger screens */}
            <img
              src={`/${product.imageurl}`}
              alt="Thumbnail"
              className="h-[150px] w-[150px] sm:h-[150px] sm:w-[180px] object-cover"
            />
          </div>
          {/* Larger Product Image */}
          <div>
            <img
              className="product-img w-full h-auto sm:w-[780px] sm:h-[603px] object-cover"
              src={`/${product.imageurl}`}
              alt="Product Image"
            />
          </div>
        </div>

        <div className="mobile-col">
          <h1 className="text-2xl font-bold mt-2">{product.name}</h1>
          <div className="flex items-center gap-2 mt-2 mb-6">
            <div className="flex gap-1">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  fill="currentColor"
                  className="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  fill="currentColor"
                  className="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  fill="currentColor"
                  className="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  fill="currentColor"
                  className="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  fill="currentColor"
                  className="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
            </div>
            <div>(187)</div>
          </div>

          <div className="text-2xl font-semibold mb-4">${product.price}</div>
          <div className="mb-6 w-4/5 text-gray-600">
            Step into style and comfort with ShopVoyage shoes, designed for the
            modern individual who values both aesthetics and practicality.
          </div>

          <div className="text-md mb-4 font-semibold">Select Size</div>
          <div className="flex items-center gap-3">
            <div
              className={`cursor-pointer py-3 px-5 bg-gray-100 border ${
                selectedSize === "S" ? "border-red-500" : "border-gray-300"
              }`}
              onClick={handleSizeS}
            >
              S
            </div>
            <div
              className={`cursor-pointer py-3 px-5 bg-gray-100 border ${
                selectedSize === "M" ? "border-red-500" : "border-gray-300"
              }`}
              onClick={handleSizeM}
            >
              M
            </div>
            <div
              className={`cursor-pointer py-3 px-5 bg-gray-100 border ${
                selectedSize === "L" ? "border-red-500" : "border-gray-300"
              }`}
              onClick={handleSizeL}
            >
              L
            </div>
            <div
              className={`cursor-pointer py-3 px-5 bg-gray-100 border ${
                selectedSize === "XL" ? "border-red-500" : "border-gray-300"
              }`}
              onClick={handleSizeXL}
            >
              XL
            </div>
            <div
              className={`cursor-pointer py-3 px-5 bg-gray-100 border ${
                selectedSize === "XXL" ? "border-red-500" : "border-gray-300"
              }`}
              onClick={handleSizeXXL}
            >
              XXL
            </div>
          </div>
          <button
            className={`rounded-sm py-4 px-8 my-8 w-[200px] ${
              isHighlighted ? "bg-gray-900 text-black" : "bg-black text-white"
            }`}
            onClick={handleAddtoCart}
          >
            ADD TO CART
          </button>
          <div className="w-full w-[1476px] my-4 mobile-category">
            <hr className="border-t-1 border-gray-200 " />
          </div>
          <div className="mb-2 mt-6 text-sm mobile-category ">
            <span className="font-semibold">Category:</span> {product.category}
          </div>
          <div className="mb-14 text-sm">
            <span className="font-semibold ">Tags:</span> {product.type}
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="py-3 px-4 border text-sm font-semibold">
          Description
        </div>
        <div className="py-3 px-4 border text-sm">Reviews (144)</div>
      </div>
      <div className="border p-6 mb-44 text-gray-600">
        <p className="text-sm mb-4">
          These shoes are a stylish and versatile sneaker designed to blend
          comfort with modern fashion. Crafted with a lightweight, breathable
          upper, it offers the perfect balance of durability and flexibility,
          making it ideal for all-day wear. The sleek silhouette is complemented
          by a cushioned sole that provides excellent support and shock
          absorption, ensuring maximum comfort with every step.
        </p>
        <p className="text-sm">
          Available in a variety of color options, this pair of shoes caters to
          different tastes, from classic neutrals to bold, eye-catching shades.
          The shoe’s ergonomic design and premium materials not only enhance
          comfort but also provide long-lasting wear. The rubber outsole offers
          excellent traction, making it perfect for various terrains.
        </p>
      </div>

      {/* <div className="w-full w-[1476px] my-10">
        <hr className="border-t-1 border-gray-300 " />
      </div> */}
    </div>
  );
};

export default ProductPage;
