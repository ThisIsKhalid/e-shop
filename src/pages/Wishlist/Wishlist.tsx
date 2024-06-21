import BreadCrumb from "../../component/ui/BreadCrumb/BreadCrumb";
import PageHeading from "../../component/ui/PageHeading/PageHeading";

export default function Wishlist() {
  return (
    <section className="md:pt-24 pt-20">
      <div className="py-3 bg-gray-50 px-5 md:px-10">
        <BreadCrumb />
      </div>

      {/* <div>
        <h1 className="text-2xl font-semibold text-center mt-10">
          Your Wishlist is Empty
        </h1>
        <p className="text-center text-gray-500 mt-3">
          Add items to your wishlist to buy them later or share with your
          friends.
        </p>
      </div> */}

      <div className="my-5 md:my-10 mx-5 md:mx-10">
          <PageHeading title="Wishlist" />
      </div>
    </section>
  );
}
