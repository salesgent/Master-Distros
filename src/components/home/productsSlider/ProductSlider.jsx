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

import CommonProductCard from "../../productCard/productCard";
import { useDatafetcher } from "../../../utilities/hooks/useDatafetcher";
import { Stack, Typography, useTheme } from "@mui/material";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const ProductSlider = ({ data, productId }) => {
  const theme = useTheme();
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
      <ProductsContainer
        direction="row"
        alignItems="center"
        className={`homeCarousel ${isNew ? "bg-grey" : ""}`}
      >
        {data ? (
          <Stack flexDirection="column" alignItems="center" alignSelf="center">
            <Typography
              variant="h3"
              textAlign="center"
              mt={4.5}
              mb={1}
              fontWeight={900}
              fontFamily="Gothic A1"
              sx={{
                textTransform: "uppercase",
                fontSize: "38px",
                lineHeight: "48px",
                color: "#181736",
                [theme.breakpoints.down("md")]: {
                  fontSize: "25px",
                  lineHeight: "20px",
                },
              }}
            >
              {data?.name}
            </Typography>
            <Typography
              variant="h5"
              textAlign="center"
              fontWeight={300}
              mb={3}
              fontFamily="Gothic A1"
              sx={{
                textTransform: "capitalize",
                fontSize: "21px !important",
                color: "#4E4949",
              }}
            >
              We stock the best brand new products on the market in our vape
              shop.
            </Typography>
          </Stack>
        ) : (
          <span style={{ marginTop: "1em" }}></span>
        )}
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          sx={{ width: "100%", maxWidth: "100.44rem" }}
        >
          <ProductSwiperContainer
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
              1480: {
                slidesPerView: 5,
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
                  <CommonProductCard isNew={isNew} product={product} />
                </SwiperSlide>
              ))}
          </ProductSwiperContainer>
        </Stack>
      </ProductsContainer>
    );
  } else <></>;
};

export default ProductSlider;
