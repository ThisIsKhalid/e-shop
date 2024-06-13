type Idata = {
  id: number;
  title: string;
  image: string;
};

export default function TShirtEdition({ data }: { data: Idata[] }) {
  return (
    <>
      {data.length > 0 && (
        <div className="md:px-10 px-5 py-5 md:py-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {data?.map((item) => (
            <div className="group relative hover:scale-105 transition-transform duration-500 ease-in-out">
              <img src={item.image} alt="" className="" />

              <p
                className="
      absolute top-1/2  w-full text-center -translate-y-1/2  z-50 text-lg py-2 font-bold uppercase text-primary bg-white transition-opacity duration-500 ease-in-out
      "
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
