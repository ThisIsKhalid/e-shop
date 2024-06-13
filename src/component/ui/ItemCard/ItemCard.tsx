import { CiHeart, CiShoppingCart } from "react-icons/ci";

export default function ItemCard() {
  return (
    <div className="w-full h-full relative group hover:scale-105 transition-transform duration-500 ease-in-out rounded">
      <span className="uppercase text-xs bg-white text-black font-medium absolute top-[1px] left-1/2 -translate-x-1/2 inline-block py-1 px-2 rounded-b-lg z-50 whitespace-nowrap">
        Sports T-shirt
      </span>

      <p
        className="
      absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 z-50 text-lg py-1 font-semibold text-primary bg-white px-5 rounded-tl-lg rounded-br-lg transition-opacity duration-500 ease-in-out
      "
      >
        $ 1200
      </p>

      <span className=" p-[2px] absolute bottom-[1px] left-[1px] text-2xl text-black bg-white rounded-tr-lg opacity-0 group-hover:opacity-100 z-50 cursor-pointer transition-opacity duration-500 ease-in-out">
        <CiHeart />
      </span>

      <span className="p-[2px] absolute bottom-[1px] right-[1px] text-2xl text-black bg-white rounded-tl-lg opacity-0 group-hover:opacity-100 z-50 cursor-pointer transition-opacity duration-500 ease-in-out">
        <CiShoppingCart />
      </span>

      <div
        className="
      bg-black w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-30 z-0 rounded transition-opacity duration-500 ease-in-out
      "
      />

      <img
        src="https://fabrilife.com/image-gallery/638741f4b738e-square.jpg"
        alt=""
        className="w-full h-full rounded"
      />
    </div>
  );
}
