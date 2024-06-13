import MensFullSleveTShirt from "../../component/view/HomeComponents/MensFullSleveTShirt";
import MensJacket from "../../component/view/HomeComponents/MensJacket";
import NewArrival from "../../component/view/HomeComponents/NewArrival";
import TopBanner from "../../component/view/HomeComponents/TopBanner";
import TShirtEdition from "../../component/view/HomeComponents/TShirtEdition";


const Home = () => {
  return (
    <div>
      <TopBanner />
      <NewArrival />
      <TShirtEdition /> 
      <MensFullSleveTShirt />
      <MensJacket />
    </div>
  );
};

export default Home;
