import Head from "next/head";
import dynamic from "next/dynamic";
import { useMediaQuery } from "@mui/material";
//////swiper slider/////////////////
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
////////////////////////////////////////////////////////

import LandingGallery from "../src/components/home/landingGallery/LandingGallery";
import Features from "../src/components/home/Features/Features";
import LandingCarousel from "../src/components/home/ladingCarousel/landingCarousel";
import VapeCategory from "../src/components/home/productCategory/VapeCategory";
import axios from "axios";

const Tags = dynamic(() => import("../src/components/home/TagsProducts/productsSlider/Tags"));
const Newsteller = dynamic(() => import("../src/components/home/Newsteller/Newsteller"), { ssr: false });

export default function Home({ primarySlider, secondarySlider, bannerAfterSecondary }) {
  const isMobile = useMediaQuery("(max-width:640px)");

  return (
    <div>
      <Head>
        <title>ABC WHOLESALE</title>
      </Head>
      <main>
        <LandingCarousel data={primarySlider} />
        {/* <Features /> */}
        <LandingCarousel data={secondarySlider} slidesPerView={isMobile ? 2 : 5} spaceBetween={10} />
        {/* <LandingGallery secondarySlider={secondarySlider} /> */}
        {/* <VapeCategory /> */}
        <Tags bannerAfterSecondary={bannerAfterSecondary} />
        <Newsteller />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const url1 = `${process.env.DOMAIN_BASE_URL}/home/sliderImages?sliderType=primary&businessTypeId=1`;
  const url2 = `${process.env.DOMAIN_BASE_URL}/home/sliderImages?sliderType=secondary&businessTypeId=1`;
  const url3 = `${process.env.DOMAIN_BASE_URL}/home/sliderImages?sliderType=banner-after-secondary-slider&businessTypeId=1`;

  const { data: data1 } = await axios.get(url1);
  const { data: data2 } = await axios.get(url2);
  const { data: data3 } = await axios.get(url3);

  return {
    props: {
      primarySlider: data1?.result || [],
      secondarySlider: data2?.result || [],
      bannerAfterSecondary: data3?.result || [],
    },
  };
}
