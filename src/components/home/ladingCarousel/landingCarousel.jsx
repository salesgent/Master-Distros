// import cx from "classnames";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { useAnimation, motion } from "framer-motion";
////////////////////////////////////////////////////////////
import { useDatafetcher } from "../../../utilities/hooks/useDatafetcher";
import styles from "./style.module.scss";
import Link from "next/link";

// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination]);

const LandingCarousel = ({ data, spaceBetween = 20, slidesPerView = 1 }) => {
  const router = useRouter();
  const [trigger, setTrigger] = useState(false);
  const controls = useAnimation();
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  useEffect(() => {
    controls.set({
      width: 0,
    });
    controls.start({
      width: "100%",
      transition: { duration: 5.1 },
    });
  }, [trigger, controls]);

  return (
    <div className="homeCarousel">
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        // centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        onSlideChange={() => {
          setTrigger(!trigger);
        }}
        pagination={pagination}
        className={styles.slidesContainer}
      >
        {data?.sliderImageList?.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className={styles.slide}>
              <Link href={slide.redirectPath || ""} passHref>
                <img src={slide.imageUrl} alt="image" style={{ width: "100%", height: "auto" }} />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className={styles.progressBar}>
        <motion.div
          animate={controls}
          exit={{
            width: 0,
          }}
          className={styles.fill}
        ></motion.div>
      </div> */}
    </div>
  );
};

export default LandingCarousel;
