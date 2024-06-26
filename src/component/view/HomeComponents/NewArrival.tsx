import Button from "../../ui/Button/Button";
import NewArivalCard from "../../ui/ItemCard/NewArrivalCard";

export default function NewArrival() {
  return (
    <section className="md:py-10 py-5">
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
        <NewArivalCard />
        <NewArivalCard />
        <NewArivalCard />
        <NewArivalCard />
        <NewArivalCard />
        <NewArivalCard />
        <NewArivalCard />
        <NewArivalCard />
        <NewArivalCard />
      </div>

      <div className="flex justify-center mt-5">
       <Button variant="secondary">View More</Button>
      </div>
    </section>
  );
}
