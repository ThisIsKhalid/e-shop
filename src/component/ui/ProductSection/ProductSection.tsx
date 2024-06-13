// import { IProductItem } from "../../../types/productItem";
import ItemCard from "../ItemCard/ItemCard";

type ProductSectionProps = {
  title: string;
  image: string;
  // items: IProductItem[];
};

type IData = {
  data: ProductSectionProps;
};

export default function ProductSection({ data }: IData) {
  return (
    <section className="md:px-10 px-5 py-5 md:py-10">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        <div className="relative self-start">
          <img src={data.image} alt="" className="" />
          <p
            className="
      absolute top-1/2  w-full text-center -translate-y-1/2  z-50 text-lg py-2 font-bold uppercase text-primary bg-white transition-opacity duration-500 ease-in-out
      "
          >
            {data.title}
          </p>
        </div>
        <div className="md:col-span-2 col-span-1 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
    </section>
  );
}
