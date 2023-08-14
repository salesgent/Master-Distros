import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Dialog, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
////////////////////////////////////////////////////////////////

import { addTocart, localAddToCart } from "../../AsyncFunctions/cart";
import { AiOutlineClose } from "react-icons/ai";

import {
  ImageBox,
  OfferCircle,
  ProductButton,
  ProductCard,
  ProductContent,
  ProductName,
  ProductPrice,
  ProductQuickView,
  ProductRating,
  QuickView,
  QuickViewBtn,
  SelectOptionBtn,
} from "./productCard.style";
import ProductViewContainer from "../product-details/ProductView";

const CommonProductCard = ({ product, onListPage, isNew }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showQuickView, setShowQuickView] = useState(false);
  const [value, setValue] = useState(4);
  const userDetails = useSelector((state) => state.auth.userDetails);
  const token = useSelector((state) => state.auth.tokens?.token);

  ////////add to cart func
  const addToCart = () => {
    let selectedProduct = [{ ...product, quantity: 1 }];
    addTocart(selectedProduct, token)(dispatch);
  };

  return (
    <>
      <Dialog open={showQuickView} onClose={() => setShowQuickView(false)} maxWidth="xl">
        <ProductQuickView>
          <AiOutlineClose className="closeIcon" onClick={() => setShowQuickView(false)} />
          {showQuickView && <ProductViewContainer id={product.productId} />}
        </ProductQuickView>
      </Dialog>
      <Link
        href={{
          pathname: `/product-details/${product.alias}`,
          query: { id: product.productId },
        }}
      >
        <ProductCard isWhiteBg={isNew} className="product-card" onListPage={onListPage}>
          <ImageBox small={onListPage}>
            <Image
              src={product.imageUrl && product.imageUrl !== "null" ? product.imageUrl : "/images/products/ABC-Logo.png"}
              alt={product.productName}
              layout="intrinsic"
              placeholder="blur"
              blurDataURL={
                product.imageUrl && product.imageUrl !== "null" ? product.imageUrl : "/images/products/ABC-Logo.png"
              }
              width={210}
              height={210}
            />
            <QuickView className="quickView">
              <QuickViewBtn
                onClick={(e) => {
                  e.stopPropagation();
                  setShowQuickView(true);
                }}
              >
                quick view
              </QuickViewBtn>
              <SelectOptionBtn>Select Options</SelectOptionBtn>
            </QuickView>
            {product.standardPrice?.toFixed(2) !== product.standardPriceWithoutDiscount?.toFixed(2) ? (
              <>
                {/* <Box
                  sx={{
                    border: "1px solid #FD0015",
                    background: "#fff",
                    borderRadius: "50%",
                    width: 36,
                    height: 36,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 10,
                    color: "#FD0015",
                    fontWeight: 500,
                    position: "absolute",
                    top: 8,
                    right: 15,
                  }}
                >
                  {(
                    ((product.standardPrice - product.standardPriceWithoutDiscount) / product.standardPrice) *
                    100
                  ).toFixed()}
                </Box> */}
              </>
            ) : (
              <></>
            )}
          </ImageBox>
          <ProductContent small={onListPage}>
            <ProductName small={onListPage}>{product.productName}</ProductName>

            {/* <span className="title">
              {product?.title || "buy any 5 for $20"}
            </span> */}
            {userDetails ? (
              <>
                {product.standardPrice?.toFixed(2) === product.standardPriceWithoutDiscount?.toFixed(2) ? (
                  <ProductPrice small={onListPage}>
                    <p>${product.standardPrice?.toFixed(2)}</p>
                  </ProductPrice>
                ) : (
                  <ProductPrice small={onListPage}>
                    <span>${product.standardPriceWithoutDiscount?.toFixed(2)}</span>
                    <p>${product.standardPrice?.toFixed(2)}</p>
                  </ProductPrice>
                )}
              </>
            ) : (
              <ProductPrice small={onListPage} style={{ opacity: "0" }}>
                {/* something */}
              </ProductPrice>
            )}
            {/* <ProductRating
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              readOnly
            /> */}

            {!userDetails ? (
              <ProductButton
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                small={onListPage}
                onClick={(e) => {
                  e.stopPropagation();
                  router.push("/account/login");
                }}
              >
                Sign In
              </ProductButton>
            ) : (
              <>
                {product?.availableQuantity > 0 ? (
                  <ProductButton
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    small={onListPage}
                    onClick={(e) => {
                      if (product?.hasChildProduct) return;
                      e.stopPropagation();
                      addToCart();
                    }}
                  >
                    {product?.hasChildProduct ? "select options" : "add to cart"}
                  </ProductButton>
                ) : (
                  <ProductButton small={onListPage} disabled>
                    {product?.hasChildProduct ? "select options" : "out of stock"}
                  </ProductButton>
                )}
              </>
            )}
          </ProductContent>
        </ProductCard>
      </Link>
    </>
  );
};

export default CommonProductCard;
