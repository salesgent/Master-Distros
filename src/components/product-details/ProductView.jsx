import { CircularProgress, Rating, Skeleton, Fab } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
///////
import { Box, Typography, Button, Stack } from "@mui/material";
import {
  BtnsSection,
  PriceBox,
  ProductDetailedName,
  ProductDetailsBox,
  ProductDetailsTitle,
  ProductImageContainer,
  ProductShortDescriptions,
  ProductView,
  QuantityBox,
  SkuTable,
} from "./ProductDetails.styles";
import FrequentlyBought from "./FrequentlyBought";
import ProductImgCarousel from "./ProductImageCarousel/ProductImageCarousel";
import { setAlert } from "../../AsyncFunctions/alert";
import { addTocart } from "../../AsyncFunctions/cart";
import VariantsTable from "./variantsTable/VariantsTable";
import { useRouter } from "next/router";
import { makeStyles } from "@mui/styles";
import { AiOutlineCaretDown, AiFillCaretUp } from "react-icons/ai";
const useStyles = makeStyles({
  root: {
    position: "relative",
    marginTop: 35,
    maxWidth: "426px",
    "& > span": {
      width: "100%!important",
    },
  },
  bg: {
    backgroundColor: "#fff",
  },
  img: {
    // height: "256px",

    objectFit: "cover",
  },
  inner: {
    position: "absolute",
    left: 20,
    bottom: 30,
  },
  h5: {
    color: "#fff",
  },
  btn: {
    borderColor: "#fff",
    color: "#fff",
    borderRadius: 0,
    marginTop: 8,
  },
});

const ProductViewContainer = ({ productDetails, loading, id }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isLoading = useSelector((state) => state.cart.isLoading);
  const userDetails = useSelector((state) => state.auth.userDetails);
  const token = useSelector((state) => state.auth.tokens?.token);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [reset, setReset] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [data, setData] = useState(null);
  const [productLoading, setProductLoading] = useState(false);

  //setting products and images
  let product = productDetails || data;

  let images =
    product?.productImageList && product?.productImageList.length > 0
      ? product?.productImageList
      : ["/images/products/logo.png"];

  // //short description
  const shortDescription = () => {
    return { __html: product?.masterProductDetails?.shortDescription };
  };

  ///////functions
  const handleIncremenDecrement = (type) => {
    const { availableQuantity } = product?.masterProductDetails;
    if (!userDetails) return setAlert("warn", "login to add quantity")(dispatch);
    if (type === "increment") {
      if (quantity >= availableQuantity) {
        setAlert("warn", `only ${availableQuantity} is available`)(dispatch);
        setQuantity(parseInt(availableQuantity));
      } else {
        setQuantity(parseInt(quantity + 1));
      }
    } else {
      if (quantity > 0) {
        setQuantity(parseInt(quantity - 1));
      }
    }
  };
  ///////
  const addToCart = () => {
    if (isLoading) return;
    if (selectedProducts.length > 0) {
      addTocart(
        selectedProducts,
        token
      )(dispatch).then(() => {
        setReset((reset) => !reset);
      });
    } else {
      setAlert("warn", "Please ,add some quantity to continue")(dispatch);
    }
  };

  useEffect(() => {
    let newList = selectedProducts.filter((variant) => variant.productId !== product?.masterProductDetails?.productId);
    if (quantity > 0) {
      newList.push({ ...product?.masterProductDetails, quantity });
    }
    setSelectedProducts(newList);
  }, [quantity]);
  useEffect(() => {
    setQuantity(0);
  }, [reset]);
  useEffect(() => {
    setProductLoading(true);
    if (id) {
      const url = `${process.env.DOMAIN_BASE_URL}/ecommerce/product/${id}?storeIds=${2}`;
      axios.get(url).then((res) => {
        setProductLoading(false);
        setData(res.data.result);
      });
    }
  }, [!productDetails && id]);

  return (
    <ProductView>
      <ProductImageContainer>
        <ProductImgCarousel images={images} loading={loading ?? productLoading} />
      </ProductImageContainer>
      <ProductDetailsBox>
        <ProductDetailedName>{product?.masterProductDetails?.productName}</ProductDetailedName>
        <ProductShortDescriptions dangerouslySetInnerHTML={shortDescription()} />
        <Box
          sx={{
            mt: 1,
            mb: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            borderBottom: "1px solid rgba(0, 0, 0, 0.6)",
          }}
        >
          {userDetails && (
            <>
              {product?.masterProductDetails?.standardPriceWithoutDiscount !==
                product?.masterProductDetails?.standardPrice &&
                !(product?.body?.content?.length > 0) && (
                  <Typography
                    variant="h4"
                    fontWeight={400}
                    sx={{ fontSize: "35px", color: "#7E7E7E", mb: -1 }}
                    fontFamily="Gothic A1"
                  >
                    <del>${product?.masterProductDetails.standardPriceWithoutDiscount.toFixed(2)}</del>
                  </Typography>
                )}
              <Stack direction="row" alignItems="center">
                {!(product?.body?.content?.length > 0) && (
                  <Typography
                    variant="h3"
                    fontWeight={900}
                    fontFamily="Gothic A1"
                    sx={{ fontSize: "54px", color: "#181736" }}
                  >
                    {product?.masterProductDetails?.standardPriceWithoutDiscount === null ? (
                      ""
                    ) : (
                      <>${product?.masterProductDetails?.standardPrice.toFixed(2)}</>
                    )}
                  </Typography>
                )}
                {product?.masterProductDetails?.availableQuantity > 0 && !(product?.body?.content?.length > 0) && (
                  <Typography
                    variant="h3"
                    ml={2}
                    mb={1}
                    fontWeight={700}
                    fontFamily="Gothic A1"
                    sx={{ fontSize: "22px", color: "#44B71C" }}
                  >
                    In Stock
                  </Typography>
                )}
              </Stack>
            </>
          )}
        </Box>
        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          sx={{
            svg: {
              mt: 1,
              mb: 2,
              fill: "#000",
            },
          }}
        >
          <Rating name="half-rating-read" precision={1} value={4.5} readOnly />
          <Typography
            variant="body1"
            ml={2}
            mb="-2px"
            fontWeight={300}
            fontFamily="Gothic A1"
            sx={{ fontSize: "12px" }}
          >
            {/* ${product?.masterProductDetails.standardPrice.toFixed(2)} */}
            19 Reviews
          </Typography>
        </Stack>
        {product?.body?.content?.length > 0 ? (
          <VariantsTable
            reset={reset}
            productsList={selectedProducts}
            content={product?.body?.content}
            setProductsList={setSelectedProducts}
            headers={product?.header}
          />
        ) : (
          <>
            {product?.masterProductDetails?.availableQuantity > 0 ? (
              <>
                <QuantityBox small maxWidth="100px" className="no-variant">
                  <div className="circle">
                    <span onClick={() => handleIncremenDecrement("decrement")}>
                      <AiOutlineCaretDown style={{ fontSize: "inherit" }} />
                    </span>
                  </div>

                  <input
                    className="input-qty"
                    type="number"
                    value={quantity}
                    onBlur={(e) => {
                      if (!e.target.value) setQuantity(parseInt(0));
                    }}
                    onChange={(e) => {
                      if (e.target.value <= product?.masterProductDetails?.availableQuantity && e.target.value >= 0)
                        setQuantity(parseInt(e.target.value));
                    }}
                  />
                  <div className="circle">
                    <span onClick={() => handleIncremenDecrement("increment")}>
                      <AiFillCaretUp style={{ fontSize: "inherit" }} />
                    </span>
                  </div>
                </QuantityBox>
                <Typography variant="body1" mt={1}>
                  In Stock:{product?.masterProductDetails?.availableQuantity}
                </Typography>
              </>
            ) : (
              <p className="red"> {userDetails ? "out of stock " : " "}</p>
            )}
          </>
        )}
        <BtnsSection>
          {userDetails ? (
            <Stack direction="row" alignItems="center">
              <button onClick={() => addToCart()}>
                {isLoading ? <CircularProgress color="inherit" /> : "add to cart"}
              </button>
              {/* <Fab
                variant="extended"
                sx={{
                  fontSize: "17px !important",
                  fontWeight: 300,
                  textTransform: "capitalize !important",
                  color: "#000 !important",
                  boxShadow: "none",
                  bgcolor: "transparent !important",
                }}
              >
                <FavoriteBorderIcon sx={{ mr: 1 }} />
                {isLoading ? (
                  <CircularProgress color="inherit" />
                ) : (
                  "ADD TO WISH LIST"
                )}
              </Fab> */}
            </Stack>
          ) : (
            <button onClick={() => router.push("/account/login")}>login</button>
          )}
        </BtnsSection>
        <FrequentlyBought />
      </ProductDetailsBox>
    </ProductView>
  );
};

export default ProductViewContainer;
