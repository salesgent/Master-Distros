import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import dynamic from "next/dynamic";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
////////////////////////////////////////////////////////////////
const RouteBar = dynamic(() => import("../../../src/components/product-list/RouteBar"), { ssr: false });

// ;
import {
  ProductsSection,
  ProductsContainer,
  ProductsGrid,
  ProductsNotFound,
  CategoryBar,
} from "../../../src/components/product-list/style";
import { useDatafetcher } from "../../../src/utilities/hooks/useDatafetcher";
import InfiniteScroll from "react-infinite-scroll-component";
import CommonProductCard from "../../../src/components/productCard/productCard";

import LeftSection from "../../../src/components/product-list/leftSection/LeftSection";
import ProductCardSkeleton from "../../../src/components/productCard/productCardSkeleton/ProductCardSkeleton";
import { Stack, Typography, Box } from "@mui/material";
import FilterSec from "../../../src/components/product-list/filterBar/FilterSec";
import FilterBar from "../../../src/components/product-list/filterBar/FilterBar";
import useWindowSize from "../../../src/utilities/hooks/useWindowSize";
import { setPage } from "../../../src/store/products";
import { setOpenDrawer } from "../../../src/store/home";
import axios from "axios";
import { useRouter } from "next/router";

const ProductsPage = () => {
  const page = useSelector((state) => state.products.page);
  const router = useRouter();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.tokens?.token);
  const [selectedId, setSelectedId] = useState(-1);
  const [loading, setLoading] = useState(true);
  const [initial, setInitial] = useState(true);
  const [totalProducts, setTotalProducts] = useState(0);
  const [pageable, setPageable] = useState(true);
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { width } = useWindowSize();

  // const { data: fetchedData, error } = useDatafetcher(
  //   `/ecommerce/product/category?categoryIdList=${
  //     router?.query?.id
  //   }&page=${page}&size=20&sort=${
  //     router?.query?.sort || "date"
  //   }&sortDirection=${router?.query?.order || "DESC"}&storeIds=1`
  // );
  useEffect(() => {
    let id = router?.query?.id;

    let sort = router?.query?.sort || "name";
    let order = router?.query?.order || "ASC";
    if (id) {
      setProductsLoading(true);
      const url = `${
        process.env.DOMAIN_BASE_URL
      }/ecommerce/product/category?categoryIdList=${id}&page=${page}&size=20&sort=${sort || "date"}&sortDirection=${
        order || "DESC"
      }&storeIds=1`;
      axios
        .get(url, { headers: token && { Authorization: `Bearer ${token}` } })
        .then((res) => {
          setProductsLoading(false);
          setError(false);
          if (page > 0 && res.data.result?.content?.length > 0) {
            setProducts((products) => [...products, ...res.data.result?.content]);
            setTotalProducts(res.data.result?.totalElements);
            if (res.data.result?.totalPages <= page + 1) {
              setPageable(false);
            } else {
              setPageable(true);
            }
          } else if (!initial && res.data.result?.content?.length > 0) {
            setProductsLoading(false);
            setProducts(res.data.result?.content);
            setTotalProducts(res.data.result?.totalElements);
            if (productsData?.totalPages <= page + 1) {
              setPageable(false);
            } else {
              setPageable(true);
            }
            setInitial(true);
          }
        })
        .catch(() => {
          setError(true);
          setProductsLoading(false);
        });
    }
  }, [page]);
  // useEffect(() => {
  //   if (page > 0 && router?.query?.id && fetchedData?.content?.length > 0) {
  //     setProducts((products) => [...products, ...fetchedData?.content]);
  //     setTotalProducts(fetchedData?.totalElements);
  //     if (fetchedData?.totalPages <= page + 1) {
  //       setPageable(false);
  //     } else {
  //       setPageable(true);
  //     }
  //   } else if (!initial && fetchedData?.content?.length > 0) {
  //     setProducts(fetchedData?.content);
  //     setTotalProducts(fetchedData?.totalElements);
  //     if (productsData?.totalPages <= page + 1) {
  //       setPageable(false);
  //     } else {
  //       setPageable(true);
  //     }
  //     setInitial(true);
  //   }
  // }, [fetchedData]);

  useEffect(() => {
    setLoading(true);
    let id = router?.query?.id;

    let sort = router?.query?.sort || "date";
    let order = router?.query?.order || "DESC";
    if (router.query.id) {
      const url = `${process.env.DOMAIN_BASE_URL}/ecommerce/product/category?categoryIdList=${id}&page=0&size=20&sort=${sort}&sortDirection=${order}&storeIds=2`;
      axios.get(url, { headers: token && { Authorization: `Bearer ${token}` } }).then((res) => {
        setProducts(res.data.result?.content);
        setTotalProducts(res.data.result?.totalElements);

        dispatch(setPage(0));
        setLoading(false);
        if (res.data.result?.totalPages <= page + 1) {
          setPageable(false);
        } else {
          setPageable(true);
        }
      });
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>ABC WHOLESALE</title>
      </Head>
      <ProductsSection>
        <RouteBar />
        <FilterBar
          length={products?.length}
          setInitial={setInitial}
          setPageable={setPageable}
          total={totalProducts}
          query={router?.query}
        />
        <ProductsContainer>
          {width > 1280 && <LeftSection />}
          <Stack flexDirection="column">
            {width < 1280 && (
              <CategoryBar
                onClick={() => {
                  dispatch(setOpenDrawer(true));
                }}
              >
                <Image src="/images/products/category.png" alt="cat" width={16} height={16} />
                <p>categories</p>
              </CategoryBar>
            )}

            {/* {firstLoading && loading && !productsNotFound ? (
            <ProductCardSkeleton padding />
          ) : ( */}
            <>
              {loading && <ProductCardSkeleton />}
              {!loading && products?.length > 0 ? (
                <InfiniteScroll
                  dataLength={products?.length}
                  hasMore={pageable}
                  // loader={<ProductCardSkeleton />}
                  next={() => {
                    // setPage((page) => page + 1);
                    dispatch(setPage(page + 1));
                  }}
                  scrollThreshold="70%"
                >
                  <FilterSec
                    length={products?.length}
                    setInitial={setInitial}
                    setPageable={setPageable}
                    total={totalProducts}
                    query={router?.query}
                    page={page}
                  />
                  <ProductsGrid>
                    {products.map((product, i) => (
                      <CommonProductCard
                        product={product}
                        key={i}
                        setSelectedId={setSelectedId}
                        selectedId={selectedId}
                        onListPage={true}
                      />
                    ))}
                  </ProductsGrid>
                </InfiniteScroll>
              ) : (
                <ProductsNotFound>products not found!</ProductsNotFound>
              )}
            </>
            {productsLoading && <ProductCardSkeleton />}
            {/* )} */}
            {error && <ProductsNotFound>Something went wrong!</ProductsNotFound>}
          </Stack>
        </ProductsContainer>
      </ProductsSection>
    </>
  );
};

export default ProductsPage;

// export async function getServerSideProps(context) {
//   let id = context?.params?.id;
//   console.log(context?.params);
//   let sort = context?.query?.sort || "date";
//   let order = context?.query?.order || "DESC";

//   const url = `https://dev.salesgent.xyz/api/ecommerce/product/category?categoryIdList=${id}&page=0&size=20&sort=${sort}&sortDirection=${order}&storeIds=2`;
//   const { data } = await axios.get(url);

//   return {
//     props: {
//       productsData: data?.result,
//       query: context?.query,
//     },
//   };
// }
