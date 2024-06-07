import ItemCard from "../../ui/ItemCard/ItemCard";

export default function NewArrival() {
  return (
    <section className="min-h-screen">
      <div className="bg-tertiary md:px-10 px-5 py-2 text-center">
        <h1 className="text-xs md:text-sm ">
          <span className="font-semibold ">Event T-shirt :</span>{" "}
          T-shirt/Clothing with your brand logo or design? We are delivering
          worldwide at unbeatable prices.{" "}
          <span className="text-primary font-semibold">Click here</span>
        </h1>
      </div>

      <div className="bg-gray-50 h-20 flex items-center justify-center my-2 md:px-10 px-5">
        <h1 className="text-3xl uppercase font-semibold text-primary">
          New Arrival
        </h1>
      </div>

      <div
        className="
      md:px-10 px-5 grid gap-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1
      "
      >
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </section>
  );
}
