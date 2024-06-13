import ProductSection from "../../ui/ProductSection/ProductSection";

const data = {
  title: "Mens Trouser",
  image: "https://fabrilife.com/image-gallery/638a77dca03f2-square.jpg",
};

export default function MensTrouser() {
  return (
    <>
      <ProductSection data={data} />
    </>
  );
}
