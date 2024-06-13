export default function TShirtEdition() {
  return (
    <div className="md:px-10 px-5 py-5 md:py-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      <div className="group relative hover:scale-105 transition-transform duration-500 ease-in-out">
        <img
          src="https://fabrilife.com/image-gallery/638938e7d0d50-square.jpg"
          alt=""
          className=""
        />

        <p
          className="
      absolute top-1/2  w-full text-center -translate-y-1/2  z-50 text-lg py-2 font-bold uppercase text-primary bg-white transition-opacity duration-500 ease-in-out
      "
        >
          Printed Short Sleeve
        </p>
      </div>
      <div className="group relative hover:scale-105 transition-transform duration-500 ease-in-out">
        <img
          src="https://fabrilife.com/image-gallery/638a77dc9c88d-square.jpg"
          alt=""
          className=""
        />
        <p
          className="
      absolute top-1/2  w-full text-center -translate-y-1/2  z-50 text-lg py-2 font-bold uppercase text-primary bg-white transition-opacity duration-500 ease-in-out
      "
        >
          Designer Edition
        </p>
      </div>
      <div className="group relative hover:scale-105 transition-transform duration-500 ease-in-out">
        <img
          src="https://fabrilife.com/image-gallery/638a77dce126d-square.jpg"
          alt=""
          className=""
        />
        <p
          className="
      absolute top-1/2  w-full text-center -translate-y-1/2  z-50 text-lg py-2 font-bold uppercase text-primary bg-white transition-opacity duration-500 ease-in-out
      "
        >
          Short Sleeve Blanks
        </p>
      </div>
    </div>
  );
}
