import React from "react";
import {
  Box,
  Stack,
  Typography,
  Grid,
  Fab,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import Image from "next/image";
import { makeStyles } from "@mui/styles";
import Link from "@mui/material/Link";
const useStyles = makeStyles({
  root: {
    borderTop: "1px solid #CBCBCB",
    width: "100%",
    fontFamily: "Gothic A1",
  },
  plus: {
    marginLeft: "0px !important",
    fontSize: "26px",
  },
  price: {
    fontSize: "14px",
  },
  span: {
    fontWeight: 800,
    fontSize: "16px",
  },
  del: {
    fontWeight: 500,
  },
});

export default function FrequentlyBought() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Stack direction="row" alignItems="center" spacing={2} my={3}>
        <Typography variant="h6" sx={{ fontFamily: "Gothic A1" }}>
          Share:
        </Typography>
        {["facebook", "twitter", "whatsapp", "insta", "youtube"].map((v) => (
          <Link href="#" key={Math.random()}>
            <Image
              className={classes.img}
              src={`/images/home/features/${v}.svg`}
              placeholder="blur"
              blurDataURL={`/images/home/features/${v}.svg`}
              height="23px"
              width="23px"
              alt="landing-img"
            />
          </Link>
        ))}
      </Stack>
      {/* <Typography
        variant="bady1"
        fontWeight={300}
        fontFamily="Gothic A1"
        sx={{ fontSize: "17px" }}
      >
        Pick from a great selection of awesome tobacco-free nicotine flavors
        from the Mad Hatters, I Love Salts range in a super convenient
        disposable vape bar. Ideal for on-the-go vaping or as a beginner&apos;s
        introduction to vaping with smooth, satisfying 5% nicotine salts, simply
        pick a flavor and enjoy!
      </Typography> */}
      {/* <Stack spacing={0.5} mt={3}>
        <Typography
          variant="bady1"
          fontWeight={300}
          fontFamily="Gothic A1"
          sx={{ fontSize: "17px",mb:0.4 }}
        >
          <u>Quick Links:</u>
        </Typography>
        <Link
          href="#"
          fontWeight={900}
          underline="none"
          color="#000"
          fontFamily="Gothic A1"
        >
          VOOPOO TPP Coils
        </Link>
        <Link
          href="#"
          fontWeight={900}
          underline="none"
          color="#000"
          fontFamily="Gothic A1"
        >
          VOOPOO TPP Pods
        </Link>
      </Stack> */}
      {/* <Typography variant="h5" fontSize="19px" fontWeight={700} pt={2} mb={1.5}  sx={{fontFamily:'Gothic A1'}}>
        Frequently Bought Together
      </Typography>
      <Typography variant="h5" color="error" fontSize="17px" fontWeight={500}  sx={{fontFamily:'Gothic A1'}}>
        {" "}
        Save Extra 5% buying these products together
      </Typography>
      <Grid container spacing={2} alignItems="center" mt={1} mb={2}>
        <Grid item xs={6} md={3}>
          <Stack
            spacing={3}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Image
              className={classes.img}
              src={`/images/home/features/qq 1.png`}
              placeholder="blur"
              blurDataURL={`/images/home/features/qq 1.png`}
              height="80px"
              width="80px"
              alt="landing-img"
            />
            <p className={classes.plus}>+</p>
            <Image
              className={classes.img}
              src={`/images/home/features/qq 1.png`}
              placeholder="blur"
              blurDataURL={`/images/home/features/qq 1.png`}
              height="80px"
              width="80px"
              alt="landing-img"
            />
          </Stack>
        </Grid>
        <Grid item xs={6} md={4}>
          <Typography variant="subtitle2" className={classes.price}  sx={{fontFamily:'Gothic A1'}}>
            Total price:<span className={classes.span}>$ 55.07</span>{" "}
            <del className={classes.del}>$ 66.97</del>
          </Typography>
          <Fab
            variant="extended"
            color="error"
            size="small"
            sx={{ p: "0 18px", my: 1, height: "31px" , fontFamily:'Gothic A1'}}
          >
            add to cart
          </Fab>
        </Grid>
      </Grid> */}
      {/* <Box mt={1}>
        {[
          "This item: Coastal Clouds Sweets Apple Peach Strawberry 60ml Vape Juice",
          "Coastal Clouds Sweets Blood Orange Mango 60ml Vape Juice",
          " Coastal Clouds Pineapple Guava 60ml Vape Juice",
        ].map((v) => (
          <Box key={Math.random()}>
            <Stack
              spacing={1}
              direction="row"
              alignItems="center"
              my={0.5}
              sx={{
                span: {
                  padding: 0,
                  height: "14px",
                  width: "14px",
                },
                input: {
                  height: "14px",
                  width: "14px",
                },
              }}
            >
              <Checkbox defaultChecked color="error" />
              <Typography variant="body2" sx={{ fontFamily: "Gothic A1" }}>
                {v}
              </Typography>
            </Stack>
          </Box>
        ))}
      </Box> */}
    </Box>
  );
}
