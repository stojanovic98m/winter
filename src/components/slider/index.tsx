import { Image } from "native-base";
import "../../index.css";
//swiper library
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
//assets
import { sliderImagesData } from "../../data/sliderImages";

export const ImageSlider = () => {
  return (
    <Swiper
      style={{ height: "100%", width: "100%" }}
      modules={[Navigation, EffectFade, Autoplay]}
      navigation
      autoplay={{ delay: 2000 }}
      effect={"fade"}
      speed={600}
      slidesPerView={1}
      loop
    >
      {sliderImagesData.map((imageData) => {
        const { id, url } = imageData;
        return (
          <SwiperSlide key={id}>
            <Image
              source={{ uri: url }}
              position="absolute"
              alt="Alternate Text"
              width="100%"
              height="100%"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
