import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Stack, Typography, Box, Grid, useTheme } from "@mui/material";
import styled from "styled-components";
import { ProductSliderHeader } from "../productsSlider/product.styles";

const Container = styled(Stack)`
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  margin-bottom: 5em;
  display: flex;
  flex-direction: column;
  /* height: 10.66666rem; */
  @media only screen and (max-width: 768px) {
    height: 13.8rem;
  }
`;
const SwiperContainer = styled(Swiper)`
  width: 100%;
  display: flex;
  flex-direction: row;
  max-width: 1405px;
  padding-top: 4rem;
  @media only screen and (max-width: 768px) {
    padding-top:1rem
  }
`;
const BrandImg = styled.img`
  width: 100%;
  min-height: 69px;
  margin: auto;
`;
const BrandCarousel = () => {
  const theme = useTheme()
  const Brands = [
    { img: "/images/home/brands/brands.svg" },
    { img: "/images/home/brands/brands.svg" },
    { img: "/images/home/brands/brands.svg" },
    { img: "/images/home/brands/brands.svg" },
  ]

  return (
    <Container direction="row" alignItems="center">
      {/* <ProductSliderHeader variant="h4">Top E-cigs</ProductSliderHeader> */}
      <Typography
        variant="h3"
        textAlign="center"
        mt={8}
        mb={1}
        fontWeight={900}
        fontFamily='Gothic A1'
        sx={{ textTransform: "uppercase", fontSize: '38px', lineHeight: '48px', color: '#181736',[theme.breakpoints.down('md')]:{
          fontSize:'25px',
          mt:2,
         } }}
      >
        Feature Brands
      </Typography>
      <SwiperContainer
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          9: {
            slidesPerView: 1,
          },
          654: {
            slidesPerView: 1,
          },
          950: {
            slidesPerView: 1,
          },
        }}
        navigation={false}
      >
        {Brands.map((brand, i) => (
          <SwiperSlide
            key={i}
            style={{ display: "grid", placeItems: "center",'.swiper-slide':{width:'1405px !impoortant'} }}
          >
            <BrandImg src={brand.img}/>   
            {/* <Box
              sx={{
                position: "relative",
                height: '166px',
                // span: {
                //   width: "100% !important",
                // },
              }}
            >
            <Image
                src={brand.img}
                alt="fsdf"
                height={169}
                width="100%"
                objectFit="cover"
                layout="fill"
                className="img"
              />
              </Box> */}
          </SwiperSlide>
        ))}
      </SwiperContainer>
    </Container>
  );
};

export default BrandCarousel;
