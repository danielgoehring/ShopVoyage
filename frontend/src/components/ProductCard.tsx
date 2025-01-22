import Image from "next/image";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  imageurl: string;
  category: string;
  type: string;
}

const ProductCard = ({
  id,
  name,
  price,
  imageurl,
  category,
  type,
}: ProductCardProps) => {
  console.log(imageurl);
  return (
    <section className="overflow-hidden ">
      <img
        src={imageurl}
        alt={name}
        className="sm:h-[240px] xl:h-[300px] w-full object-cover mobile-grid transition-transform duration-300 ease-in-out hover:scale-105"
      />
      <div className="flex justify-between">
        <div>
          <h2 className="text-sm text-gray-700 mt-2">{name}</h2>
          <p className="text-gray-700 font-semibold">
            ${Number(price).toFixed(2)}
          </p>
        </div>
        {/* <button className="bg-white text-black border border-black p-2 mt-2 rounded-lg">Add to Cart</button> */}
      </div>
    </section>
  );
};

export default ProductCard;
