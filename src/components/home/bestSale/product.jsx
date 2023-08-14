import { SwiperSlide } from "swiper/react";
import React, { useRef } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";

SwiperCore.use([Autoplay, Navigation, Pagination]);
/////////
import {
  ProductsContainer,
  ProductSwiperContainer,
  ProductSliderHeader,
  NavButton,
  ProductsHeaderBar,
} from "./product.styles";
import styled from "styled-components";
import CommonProductCard from "../../productCard/productCard";
import { useDatafetcher } from "../../../utilities/hooks/useDatafetcher";
import { Stack, Typography, Container, useTheme } from "@mui/material";

const BrandImg = styled.img`
 object-fit:cover; 
 width: 185px;
 height:275px;
 object-fit:contain;
 @media only screen and (max-width: 768px) {
  width:130px;
  height:175px;
 }
`


const ProductSlider = ({ productId }) => {
  const theme = useTheme();
  const data = {
    id: 4,
    name: "Best Sellers",
    color: null,
    sequenceNumber: 4,
    ecommerce: true,
    productTagId: 0,
  };
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const { data: products, error } = useDatafetcher(
    data
      ? `/home/product/tagId/${data?.id}?page=0&size=10&businessTypeId=1&storeId=2`
      : `/ecommerce/product/${productId}/relatedProduct?storeIds=1,2,46,47,48,49,50,51,52`,
    data?.id || productId
  );

  let delay = 4000 + (500 * data?.id || 1);
  const isNew = data?.name.toLowerCase().includes("new product");

  if (products && products.content.length > 0) {
    return (
      // <ProductsContainer
      //   direction="row"
      //   alignItems="center"
      //   className={`homeCarousel ${isNew ? "bg-grey" : ""}`}
      // >
      <>
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          sx={{ width: "100%", maxWidth: "100.44rem" }}
        >
          <ProductSwiperContainer
            autoplay={{
              delay: 1000000,
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
              1480: {
                slidesPerView: 4,
              },
            }}
            loop={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // ProductsContainer;
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
          >
            {products &&
              products?.content?.map((product, i) => (
                <SwiperSlide
                  key={i}
                  style={{ display: "grid", placeItems: "center" }}
                >
                  <BrandImg
                    src={product.imageUrl}
                    height={275}
                  />
                  <Typography
                    variant='h6'
                    sx={{
                      fontSize: "20px",
                      fontWeight: 500,
                      textAlign: "center",
                      marginTop: '12px',
                      fontFamily: 'Gothic A1',
                      [theme.breakpoints.down('md')]: {
                        fontSize: "12px"
                      }
                    }}
                  >
                    REULEAUX RX G Smart & Cyberpunk
                  </Typography>
                </SwiperSlide>
              ))}
          </ProductSwiperContainer>
        </Stack>
        {/* </ProductsContainer> */}
      </>
    );
  } else <></>;
};

export default ProductSlider;
