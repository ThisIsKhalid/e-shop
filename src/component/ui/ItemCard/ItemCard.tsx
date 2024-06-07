export default function ItemCard() {
  return (
    <div className="w-full h-full relative">
      <span className="uppercase lg:text-sm text-xs bg-white text-black font-medium absolute top-[1px] left-1/2 -translate-x-1/2 inline-block py-1 px-2 rounded-b-lg">
        Sports T-shirt
      </span>

      <img
        src="https://fabrilife.com/image-gallery/638741f4b738e-square.jpg"
        alt=""
        className="w-full h-full"
      />
    </div>
  );
}
