import Button from "../../ui/Button/Button";

export default function TopBanner() {
  return (
    <section className="h-[550px] md:px-10 px-5 md:my-10 my-5">
      <div className="h-full flex items-center md:flex-row flex-col-reverse">
        <div className="h-full w-full md:w-1/2 bg-gray-800 rounded-b-lg md:rounded-l-lg flex items-center justify-center p-5">
          <div>
            <h1 className="text-white lg:text-6xl md:text-5xl text-3xl  font-bold">EID AL- ADHA 24</h1>
            <Button variant="outline" className="mt-5 border-white text-white">Shop Now</Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full rounded-t-lg md:rounded-r-lg">
          <img
            src="https://easyfashion.com.bd/wp-content/uploads/2024/05/Untitled-design-scaled.webp"
            alt=""
            className="h-full w-full object-cover rounded-t-lg md:rounded-r-lg"
          />
        </div>
      </div>
    </section>
  );
}
