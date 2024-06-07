import Button from "../../ui/Button/Button";

export default function TopBanner() {
  return (
    <section className="h-[650px] md:px-10 px-5 md:my-10 my-5">
      <div className="h-full flex items-center md:flex-row flex-col-reverse">
        <div className="h-full w-full md:w-1/2 bg-gray-800 flex items-center justify-center p-5">
          <div>
            <h1 className="text-white lg:text-6xl md:text-5xl text-3xl  font-bold">
              EID AL- ADHA 24
            </h1>
            <Button variant="outline" className="mt-5 border-white text-white">
              Shop Now
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full">
          <img
            src="https://easyfashion.com.bd/wp-content/uploads/2024/05/Untitled-design-scaled.webp"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
