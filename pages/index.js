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
import Customers from "../src/components/home/customers/Customers";
import { HomeBanner } from "@salesgenterp/ui-components";

const Tags = dynamic(() => import("../src/components/home/TagsProducts/productsSlider/Tags"));
const Newsteller = dynamic(() => import("../src/components/home/Newsteller/Newsteller"), { ssr: false });

export default function Home({}) {
  const isMobile = useMediaQuery("(max-width:640px)");

  return (
    <div>
      <Head>
        <title>Master Distros</title>
      </Head>
      <main>
        <div
        // style={{ maxWidth: 1600, margin: "1rem auto" }}
        >
          <HomeBanner apiEndPoint={process.env.DOMAIN_BASE_URL} />
        </div>
        {/* <LandingCarousel data={primarySlider} /> */}
        {/* <Features /> */}
        {/* <div style={{ margin: "0.6rem 0" }}>
          <LandingCarousel data={secondarySlider} slidesPerView={isMobile ? 2 : 5} spaceBetween={10} />
        </div> */}
        {/* <LandingGallery secondarySlider={secondarySlider} /> */}
        {/* <VapeCategory /> */}
        <Tags />
        <Customers />
        <Newsteller />
      </main>
    </div>
  );
}
