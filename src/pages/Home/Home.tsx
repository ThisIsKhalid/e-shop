import MensFullSleveTShirt from "../../component/view/HomeComponents/MensFullSleveTShirt";
import MensJacket from "../../component/view/HomeComponents/MensJacket";
import MensTrouser from "../../component/view/HomeComponents/MensTrouser";
import NewArrival from "../../component/view/HomeComponents/NewArrival";
import TopBanner from "../../component/view/HomeComponents/TopBanner";
import TShirtEdition from "../../component/view/HomeComponents/TShirtEdition";

const tShirtEditionData = [
  {
    id: 1,
    title: "Printed Short Sleeve",
    image: "https://fabrilife.com/image-gallery/638938e7d0d50-square.jpg",
  },
  {
    id: 2,
    title: "Designer Edition",
    image: "https://fabrilife.com/image-gallery/638a77dc9c88d-square.jpg",
  },
  {
    id: 3,
    title: "Short Sleeve Blanks",
    image: "https://fabrilife.com/image-gallery/638a77dce126d-square.jpg",
  },
  {
    id: 4,
    title: "Single Jersey Polo",
    image: "https://fabrilife.com/image-gallery/638a77dcd7e6e-square.jpg",
  },
  {
    id: 5,
    title: "PK Polo",
    image: "https://fabrilife.com/image-gallery/638a77dccfbf4-square.jpg",
  },
  {
    id: 6,
    title: "Kids Polo",
    image: "https://fabrilife.com/image-gallery/63893746ac793-square.jpg",
  },
  {
    id: 7,
    title: "Sports Trouser",
    image: "https://fabrilife.com/image-gallery/638a77dc9f8e6-square.jpg",
  },
  {
    id: 8,
    title: "Comfy Trouser",
    image: "https://fabrilife.com/image-gallery/638a77dd192d3-square.jpg",
  },
  {
    id: 9,
    title: "Mens Undergarments",
    image: "https://fabrilife.com/image-gallery/638a77dcdeb6f-square.jpg",
  },
];

const Home = () => {
  return (
    <div className="md:pt-24 pt-20">
      <TopBanner />
      <NewArrival />
      <TShirtEdition data={tShirtEditionData.slice(0, 3)} />
      <MensFullSleveTShirt />
      <MensJacket />
      <TShirtEdition data={tShirtEditionData.slice(3, 6)} />
      <MensTrouser />
      <TShirtEdition data={tShirtEditionData.slice(6, 9)} />
    </div>
  );
};

export default Home;
