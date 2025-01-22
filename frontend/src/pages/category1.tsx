import React, { useState, useEffect } from "react";
import Product1 from "../components/Product1";
import { fetchProducts1, Products1 } from "../utils/fetchProduct1";

import { useRouter } from "next/router";

const Category1 = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [filterMn, setFilterMn] = useState(false);
  const [filterWn, setFilterWn] = useState(false);
  const [filterSneakers, setFilterSneakers] = useState(false);
  const [filterSandals, setFilterSandals] = useState(false);
  const [filterBoots, setFilterBoots] = useState(false);
  const [sortOption, setSortOption] = useState("");

  const [products, setProducts] = useState<Products1[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts1();
        console.log("Fetched products:", data);
        setProducts(data);
      } catch (err) {
        // setError(err.message);
      }
    };

    getProducts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  // const handleImage = (id) => {
  //   router.push(`/listing/${id}`);
  // };

  // onClick={() => handleImage(image._id)}

  const filteredProducts = products.filter((product) => {
    // Check if any category filter is selected
    const categoryFilters = [];
    if (filterMn) categoryFilters.push("men");
    if (filterWn) categoryFilters.push("women");

    // If there are selected categories, check if the product's category matches any of them
    const categoryMatch =
      categoryFilters.length > 0
        ? categoryFilters.includes(product.category)
        : true;

    // Check if any type filter is selected
    const typeFilters = [];
    if (filterSneakers) typeFilters.push("sneakers");
    if (filterSandals) typeFilters.push("sandals");
    if (filterBoots) typeFilters.push("boots");

    // If there are selected types, check if the product's type matches any of them
    const typeMatch =
      typeFilters.length > 0 ? typeFilters.includes(product.type) : true;

    // Return true if the product matches both the category and type filters
    return categoryMatch && typeMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "low-high") {
      return a.price - b.price; // Sort low to high
    } else if (sortOption === "high-low") {
      return b.price - a.price; // Sort high to low
    }
    return 0; // No sorting for "relevant"
  });

  const handleCheckboxChangeMn = () => {
    setFilterMn(!filterMn); // Toggle the checkbox state
  };

  const handleCheckboxChangeWn = () => {
    setFilterWn(!filterWn); // Toggle the checkbox state
  };
  const handleCheckboxChangeSneakers = () => {
    setFilterSneakers(!filterSneakers); // Toggle the checkbox state
  };
  const handleCheckboxChangeBoots = () => {
    setFilterBoots(!filterBoots); // Toggle the checkbox state
  };
  const handleCheckboxChangeSandals = () => {
    setFilterSandals(!filterSandals); // Toggle the checkbox state
  };

  return (
    <section className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-60">
        <p
          onClick={() => {
            setShowFilter(!showFilter);
          }}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
        </p>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="woman"
                checked={filterWn}
                onChange={handleCheckboxChangeWn}
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="men"
                checked={filterMn}
                onChange={handleCheckboxChangeMn}
              />{" "}
              Men
            </p>

            {/* <p className="flex gap-2">
              <input className="w-3" type="checkbox" value="all" /> All
            </p> */}
          </div>
        </div>
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="boots"
                checked={filterBoots}
                onChange={handleCheckboxChangeBoots}
              />
              Boots
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="sandals"
                checked={filterSandals}
                onChange={handleCheckboxChangeSandals}
              />
              Sandals
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value="sneakers"
                checked={filterSneakers}
                onChange={handleCheckboxChangeSneakers}
              />
              Sneakers
            </p>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1">
        <header className="flex justify-between text-base sm:text-2xl mb-4">
          <h1 className="text-2xl font-semibold">ALL COLLECTIONS</h1>
          {/* Product Sort */}
          <select
            className="border-2 border-gray-300 text-sm px-2"
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </header>

        {/* Map Products */}
        <div>
          <Product1 products={sortedProducts} />
        </div>
      </div>
    </section>
  );
};

export default Category1;
