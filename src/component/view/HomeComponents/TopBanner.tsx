import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../../ui/Button/Button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { Mousewheel } from "swiper/modules";

export default function TopBanner() {
  return (
    <Swiper
//    direction={"vertical"}
      grabCursor={true}
      mousewheel={{ releaseOnEdges: true }}
      modules={[Mousewheel]}
      spaceBetween={30}
      className="md:h-[650px] h-[450px] md:px-10 px-5 md:my-10 my-5"
    >
      <SwiperSlide className="h-full flex items-center md:flex-row flex-col-reverse">
        <div className="h-full w-full md:w-1/2 bg-gray-800 flex items-center justify-center p-5">
          <div>
            <h1 className="text-white uppercase lg:text-6xl md:text-5xl text-3xl  font-bold">
              EID AL- ADHA 24
            </h1>
            <Button
              variant="outline"
              className="mt-5 border-white text-white hover:bg-white hover:text-black"
            >
              Shop Now
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full">
          <img
            src="https://easyfashion.com.bd/wp-content/uploads/2024/05/Untitled-design-scaled.webp"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="h-full flex items-center md:flex-row flex-col-reverse">
        <div className="h-full w-full md:w-1/2 bg-gray-800 flex items-center justify-center p-5">
          <div>
            <h1 className="text-white first-line:uppercase lg:text-6xl md:text-5xl text-3xl  font-bold">
              Casual Shirt
            </h1>
            <Button
              variant="outline"
              className="mt-5 border-white text-white hover:bg-white hover:text-black"
            >
              Shop Now
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full">
          <img
            src="https://easyfashion.com.bd/wp-content/uploads/2024/05/Untitled-design-1-1536x887.webp"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide className="h-full flex items-center md:flex-row flex-col-reverse">
        <div className="h-full w-full md:w-1/2 bg-gray-800 flex items-center justify-center p-5">
          <div>
            <h1 className="text-white first-line:uppercase lg:text-6xl md:text-5xl text-3xl  font-bold">
              Polo T-Shirt
            </h1>
            <Button
              variant="outline"
              className="mt-5 border-white text-white hover:bg-white hover:text-black"
            >
              Shop Now
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full">
          <img
            src="https://easyfashion.com.bd/wp-content/uploads/2024/05/Untitled-design-2-1536x1024.webp"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
