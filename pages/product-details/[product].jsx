import Head from "next/head";
import React, { useState } from "react";
//////////
import { useRouter } from "next/router";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Newsteller from "../../src/components/home/Newsteller/Newsteller";
import ProductSlider from "../../src/components/home/productsSlider/ProductSlider";
import {
  FullDescriptionBox,
  ProductDetailsContainer,
  ProductDetailsSection,
  TabsContainer,
} from "../../src/components/product-details/ProductDetails.styles";
import ProductViewContainer from "../../src/components/product-details/ProductView";
import FilterBar from "../../src/components/product-list/filterBar/FilterBar";
import RouteBar from "../../src/components/product-list/RouteBar";
import { useDatafetcher } from "../../src/utilities/hooks/useDatafetcher";

const ProductsDetailsPage = ({}) => {
  const [selectedTab, setSelectedTab] = useState(1);
  const router = useRouter();
  const id = router?.query?.id;
  const { data: product } = useDatafetcher(`/ecommerce/product/${id}?storeIds=${1}`, true);
  //////descriptions
  const fullDescription = () => {
    if (product?.masterProductDetails?.fullDescription?.length > 1) {
      return { __html: product.masterProductDetails?.fullDescription };
    } else {
      return { __html: "<p> No Product Related description found! </p>" };
    }
  };

  return (
    <>
      <Head>
        <title>Master Distro</title>
      </Head>
      <ProductDetailsSection>
        <RouteBar name={product?.masterProductDetails?.productName} />
        <FilterBar onDetails={true} name={product?.masterProductDetails?.productName} />
        <ProductDetailsContainer>
          <ProductViewContainer productDetails={product} loading={true} />
          <TabsContainer>
            <div
              className="tab"
              onClick={() => setSelectedTab(1)}
              style={selectedTab === 1 ? { borderBottom: "3px solid #DDA60A" } : {}}
            >
              <h6 style={selectedTab === 1 ? { fontWeight: "bold" } : {}}>description</h6>
            </div>
            <div
              className="tab"
              onClick={() => setSelectedTab(2)}
              style={selectedTab === 2 ? { borderBottom: "3px solid #DDA60A" } : {}}
            >
              <h6 style={selectedTab === 2 ? { fontWeight: "bold" } : {}}>Reviews&nbsp;(0)</h6>
            </div>
            {/* <div
        className="tab"
        onClick={() => setSelectedTab(3)}
        style={
          selectedTab === 3 ? { borderBottom: "3px solid #DDA60A" } : {}
        }
      >
        <h6 style={selectedTab === 3 ? { fontWeight: "bold" } : {}}>
          Vendor Info
        </h6>
      </div>
      <div
        className="tab"
        onClick={() => setSelectedTab(4)}
        style={
          selectedTab === 4 ? { borderBottom: "3px solid #DDA60A" } : {}
        }
      >
        <h6 style={selectedTab === 4 ? { fontWeight: "bold" } : {}}>
          more products
        </h6>
      </div> */}
          </TabsContainer>
          <FullDescriptionBox>
            {selectedTab === 1 && <div dangerouslySetInnerHTML={fullDescription()} />}
          </FullDescriptionBox>
        </ProductDetailsContainer>
        <ProductSlider productId={product?.masterProductDetails?.productId} />
      </ProductDetailsSection>
      <Newsteller />
    </>
  );
};

export default ProductsDetailsPage;
