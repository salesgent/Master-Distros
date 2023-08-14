import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import { FeaturesBox, FeaturesContainer, FeaturesSection } from "./FeaturesRow.styles";

const data = [
  {
    image: "/images/home/features/f-1.png",
    p: <>5 STARS RATED EXCELLENT</>,
    span: <>Over 12,000 Trust Pilot reviews</>,
    width: 32,
    height: 35,
  },
  {
    image: "/images/home/features/f-2.png",
    p: <>ESTABLISHED SINCE 2008</>,
    span: <>The Us&apos;s 1st e-cigarette Company</>,
    width: 38,
    height: 38,
  },
  {
    image: "/images/home/features/f-3.png",
    p: <>E-LIQUID SUBSCRIPTIONS</>,
    span: <>From $8 per bottle!</>,
    width: 33,
    height: 25,
  },
  {
    image: "/images/home/features/f-4.png",
    p: <>FREE US DELIVERY</>,
    span: <>On all orders over $2500</>,
    width: 28,
    height: 33,
  },
];

const Features = ({ onListPage }) => {
  return (
    <FeaturesSection onListPage={onListPage}>
      <FeaturesContainer onListPage={onListPage}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6} lg={3}>
            <FeaturesBox onListPage={onListPage} bordered>
              <div className="imgBox">
                <Image layout="fixed" height={35} width={32} src="/images/home/features/f-1.png" alt="feature" />
              </div>
              <div className="col">
                <p>5 STARS RATED EXCELLENT</p>
                <span>Over 12,000 Trust Pilot reviews</span>
              </div>
            </FeaturesBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <FeaturesBox onListPage={onListPage} bordered sm>
              <div className="imgBox">
                <Image layout="fixed" height={38} width={38} src="/images/home/features/f-2.png" alt="feature" />
              </div>
              <div className="col">
                <p>ESTABLISHED SINCE 2008</p>
                <span>The Us&apos;s 1st e-cigarette Company</span>
              </div>
            </FeaturesBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <FeaturesBox onListPage={onListPage} bordered>
              <div className="imgBox">
                <Image layout="fixed" height={33} width={25} src="/images/home/features/f-3.png" alt="feature" />
              </div>
              <div className="col">
                <p>E-LIQUID SUBSCRIPTIONS</p>
                <span>From $8 per bottle!</span>
              </div>
            </FeaturesBox>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <FeaturesBox onListPage={onListPage}>
              <div className="imgBox">
                <Image layout="fixed" height={28} width={33} src="/images/home/features/f-4.png" alt="feature" />
              </div>
              <div className="col">
                <p>FREE US DELIVERY</p>
                <span>On all orders over $2500</span>
              </div>
            </FeaturesBox>
          </Grid>
        </Grid>
      </FeaturesContainer>
    </FeaturesSection>
  );
};

export default Features;
