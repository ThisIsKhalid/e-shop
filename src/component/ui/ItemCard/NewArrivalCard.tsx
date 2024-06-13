
export default function NewArivalCard() {
  return (
    <div className="w-full h-full relative group hover:scale-105 transition-transform duration-500 ease-in-out rounded">
      <span className="uppercase text-xs bg-white text-black font-medium absolute top-[1px] left-1/2 -translate-x-1/2 inline-block py-1 px-2 rounded-b-lg z-50 whitespace-nowrap">
        Sports T-shirt
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
