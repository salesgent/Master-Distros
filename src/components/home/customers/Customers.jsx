import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Customers = () => {
  const brands = [
    {
      id: 1,
      name: "Social",
      image: "/images/home/brands/p1.png",
      link: "/",
    },
    {
      id: 6,
      name: "Purple",
      image: "/images/home/brands/p6.png",
      link: "/",
    },
    {
      id: 3,
      name: "Pod King",
      image: "/images/home/brands/p3.png",
      link: "/",
    },
    {
      id: 4,
      name: "Crumbs",
      image: "/images/home/brands/p4.png",
      link: "/",
    },
    {
      id: 7,
      name: "Flying Monkey",
      image: "/images/home/brands/p7.png",
      link: "/",
    },
    {
      id: 2,
      name: "Bomb Bar",
      image: "/images/home/brands/p2.png",
      link: "/",
    },
    {
      id: 5,
      name: "Puro",
      image: "/images/home/brands/p5.png",
      link: "/",
    },
  ];

  let delay = 4000;

  return (
    <Stack style={{ padding: "2rem 0" }}>
      <Container>
        <Typography variant="h4" sx={{ pb: 4 }} fontWeight={700} textAlign="center" gutterBottom>
          Our Brands
        </Typography>
        <Swiper
          autoplay={{
            delay,
            disableOnInteraction: true,
          }}
          spaceBetween={10}
          breakpoints={{
            1: {
              slidesPerView: 2,
            },
            754: {
              slidesPerView: 2,
            },
            1060: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          navigation={false}
        >
          {brands?.slice(0, 4)?.map((data, i) => (
            <SwiperSlide key={i}>
              <Link href={data.link || ""}>
                <div>
                  <Stack sx={{ width: 1, height: 120, position: "relative", cursor: "pointer" }}>
                    <Image
                      alt={data.name}
                      layout="fill"
                      src={data.image}
                      objectFit="contain"
                      // style={{ filter: "brightness(0)" }}
                    />
                  </Stack>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          autoplay={{
            delay,
            disableOnInteraction: true,
          }}
          spaceBetween={10}
          breakpoints={{
            1: {
              slidesPerView: 2,
            },
            754: {
              slidesPerView: 2,
            },
            1060: {
              slidesPerView: 3,
            },
          }}
          navigation={false}
        >
          {brands?.slice(4, 7)?.map((data, i) => (
            <SwiperSlide key={i}>
              <Link href={data.link || ""}>
                <div>
                  <Stack sx={{ width: 1, height: 120, position: "relative", cursor: "pointer" }}>
                    <Image
                      alt={data.name}
                      layout="fill"
                      src={data.image}
                      objectFit="contain"
                      // style={{ filter: "brightness(0)" }}
                    />
                  </Stack>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Stack>
  );
};

export default Customers;
