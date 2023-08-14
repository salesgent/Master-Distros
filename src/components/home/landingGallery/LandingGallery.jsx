import Image from "next/image";
import Link from "next/link";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
// import { FirstItem, GalleryContainer, Item } from "./Gallery.style";

const useStyles = makeStyles({
  root: {
    position: "relative",
    marginTop: 0,
    height: "203px",
    "@media only screen and (max-width: 640px)": {
      height: "80px",
    },
    // "& > span": {
    //   width: "100%!important",
    // },
  },
});

const data = ["qq 1", "qq 2", "qq 3", "qq 4"];
const LandingGallery = ({ secondarySlider }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Image
        className={classes.img}
        src="/images/home/brands/FSDF.png"
        layout="fill"
        alt="fsdf"
        height={203}
        objectFit="contain"
        width="100%"
      />
      {/* <Container> */}
      {/* <Grid container spacing={2}>
          {secondarySlider.sliderImageList?.map((img, i) => {
            if (i === 0) return;
            return (
              <Grid item lg={3} md={3} sm={6} xs={12}>
                <Link href={img?.redirectPath} passHref>
                  <Image
                    src={img?.imageUrl || "/images/product-imgnotfound.png"}
                    layout="fill"
                    alt="landing-img"
                  />
                </Link>
              </Grid>
            );
          })}
        </Grid> */}
      {/* <Grid container spacing={2}>
          {data.map((img, i) => (
            <Grid item xs={12} sm={6} md={3} lg={3} key={Math.random()}>
              <Box className={classes.root}>
                <Image
                  className={classes.img}
                  src={`/images/home/features/${img}.png`}
                  placeholder="blur"
                  blurDataURL={`/images/home/features/${img}.png`}
                  height="256px"
                  width="100%"
                  alt="landing-img"
                />
                <Box className={i === 0 ? classes.innerFirst : classes.inner}>
                  <Typography variant="h5" className={classes.h5}>
                    FLAVORED
                  </Typography>
                  <Typography
                    variant="h5"
                    fontWeight={800}
                    className={classes.h5}
                  >
                    FREEBASE JUICE
                  </Typography>
                  <Button variant="outlined" className={classes.btn}>
                    SHOP NOW
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container> */}
    </Box>
    // <GalleryContainer>
    //   <FirstItem gridArea="item1" color="black">
    //     <Link href={secondarySlider?.sliderImageList[0]?.redirectPath}>
    //       <Image
    //         src={
    //           secondarySlider?.sliderImageList[0]?.imageUrl ||
    //           "/images/product-imgnotfound.png"
    //         }
    //         layout="fill"
    //         alt="landing-img"
    //       />
    //     </Link>
    //   </FirstItem>
    //   {secondarySlider.sliderImageList?.map((img, i) => {
    //     if (i === 0) return;
    //     return (
    //       <Item
    //         height={i === 1 ? "25.5rem" : null}
    //         gridArea={`item${i + 2}`}
    //         key={i}
    //       >
    //         <Link href={img?.redirectPath} passHref>
    //           <Image
    //             src={img?.imageUrl || "/images/product-imgnotfound.png"}
    //             layout="fill"
    //             alt="landing-img"
    //           />
    //         </Link>
    //       </Item>
    //     );
    //   })}
    // </GalleryContainer>
  );
};

export default LandingGallery;
