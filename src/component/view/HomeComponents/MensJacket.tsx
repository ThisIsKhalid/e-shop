import ProductSection from "../../ui/ProductSection/ProductSection";

const data = {
  title: "Mens Jacket",
  image: "https://fabrilife.com/image-gallery/6389374585bcd-square.jpg",
};

export default function MensJacket() {
  return (
    <>
      <ProductSection data={data} />
    </>
  );
}
