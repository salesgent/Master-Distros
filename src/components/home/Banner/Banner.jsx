import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
//////
import { BannerBox, BannerContainer } from "./Banner.style";
import { Typography, Button, Grid, Box, useTheme } from "@mui/material";
import Link from "next/link";

const data = [
  {
    name: "disposable",
    name2: "vapes",
    img: "/images/home/banner/b 1.png",
  },
  {
    name: "e liquid ",
    name2: "brands",
    img: "/images/home/banner/b 2.png",
  },
  {
    name: "pod kits ",
    name2: "devices",
    img: "/images/home/banner/b 3.png",
  },
  {
    name: "vape kits",
    name2: "brands",
    img: "/images/home/banner/b 4.png",
  },
  {
    name: "vape coils ",
    name2: "brands",
    img: "/images/home/banner/b 5.png",
  },
  {
    name: "vape tanks",
    name2: "brands",
    img: "/images/home/banner/b 6.png",
  },
];

const Banner = ({ bannerAfterSecondary }) => {
  const theme = useTheme();
  const ref1 = useRef();
  const ref2 = useRef();
  const InView1 = useInView(ref1, { amount: 0.7, once: true });
  const InView2 = useInView(ref2, { amount: 0.7, once: true });

  return (
    <BannerContainer>
      <Grid container spacing={1}>
        {bannerAfterSecondary?.sliderImageList?.map((v, i) => (
          <Grid item lg={4} md={6} sm={12} xs={12} key={i}>
            <Box
              sx={
                {
                  // position: "relative",
                  // height: "166px",
                  // span: {
                  //   width: "100% !important",
                  // },
                }
              }
            >
              <Link href={v?.redirectPath || ""} passHref>
                <img
                  src={v?.imageUrl && v?.imageUrl !== "null" ? v?.imageUrl : "/images/products/logo.png"}
                  alt="image"
                  style={{ width: "100%", height: "auto", cursor: "pointer" }}
                />
              </Link>
              {/* <Typography
                variant="h5"
                fontFamily="Gothic A1"
                fontWeight={900}
                sx={{
                  fontSize: "38px",
                  textTransform: "uppercase",
                  position: "absolute",
                  top: "22%",
                  left: "10%",
                  color: "#181736",
                  [theme.breakpoints.down("md")]: {
                    fontSize: "25px",
                  },
                }}
              >
                {v.name} <br />
                {v.name2}
              </Typography> */}
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* <BannerBox
        bg="url('/images/home/background/smoke-bg.png')"
        style={{ justifyContent: "center" }}
        initial={{ opacity: 0, x: -100 }}
        animate={InView1 && { opacity: 1, x: 0 }}
        ref={ref1}
        transition={{
          type: "spring",
          stiffness: 148,
          mass: 1,
          damping: 5,
        }}
      >
        <h4>STOP SMOKING - START VAPING</h4>
        <Typography variant="h5" my={3}>
          ALL YOU NEED TO KNOW
        </Typography>
        <Button
          variant="contained"
          color="error"
          size="large"
          px={10}
          sx={{
            fontFamily: "Gothic A1",
            px: 5,
          }}
        >
          READ THE GUIDE
        </Button>
      </BannerBox> */}
    </BannerContainer>
  );
};

export default Banner;
