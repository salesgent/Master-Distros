import React, { useState } from "react";

import cx from "classnames";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
////////////////////////////////////////////////////////////////
import styles from "./carousel.module.scss";

const ProductImgCarousel = ({ images, loading }) => {
  return (
    <div className={cx(styles.container, "imageGalleryContainer")}>
      <div
        className={styles.mainCarousel}
        style={{
          ".carousel .thumb.selected": {
            display: "flex",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
          },
        }}
      >
        {images && (
          <Carousel
            className={cx(styles.mainSwiper, "productViewCarousel")}
            showIndicators={false}
            emulateTouch={true}
            infiniteLoop={true}
            interval="5000"
            autoPlay={true}
            showStatus={false}
            // centerMode={true}
            dynamicHeight={false}
          >
            {images.map((image, i) => (
              <div key={i} style={{ height: "100%" }}>
                <img
                  src={image && image !== "null" ? image : "/images/products/logo.png"}
                  alt="image not found"
                  className={styles.slide}
                  width={100}
                  style={{ height: "100%" }}
                />
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default ProductImgCarousel;
