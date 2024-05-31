import Image from 'next/image';
 
 interface ProductCardProps {
    id: number;
    name: string;
    price: number;
    imageurl: string;
  }
  
 

  const ProductCard = ({ id, name, price, imageurl }: ProductCardProps) => {
    console.log(imageurl);
    return (
      <div className="w-[340px] mx-4">
        
        <img src={imageurl} alt={name} className="w-[340px] h-[340px] object-cover rounded-lg" />
        <div className="flex justify-between">
        <div>
        <h2 className="text-xl font-bold mt-2">{name}</h2>
        <p className="text-gray-700">${Number(price).toFixed(2)}</p>
        </div>
        <button className="bg-white text-black border border-black p-2 mt-2 rounded-lg">Add to Cart</button>
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  