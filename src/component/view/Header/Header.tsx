import Button from "../../ui/Button/Button";
import TopHeader from "./TopHeader"

const Header = () => {
  return (
    <div className="p-20">
      <TopHeader />
      <Button>Click Here</Button>
      <Button variant="secondary" className="">Click Here</Button>
    </div>
  );
}

export default Header