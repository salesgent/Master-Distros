import React from "react";
import Link from "next/link";
////////////////////////////////////////////////////////////////
import { FetchSearchData } from "../../../AsyncFunctions/navbar";
import { useDatafetcher } from "../../../utilities/hooks/useDatafetcher";
import { useDebounce } from "../../../utilities/hooks/useDebounce";
import styles from "../search.module.scss";

const SearchDropDown = ({ searchData }) => {
  const { data: fetchData, error } = useDatafetcher(
    `/ecommerce/product/searchByProductOrCategory?searchInput=${searchData}`,
    searchData.length > 2
  );
  const Debounce = useDebounce(searchData, 5000);
  return (
    <div className={styles.searchDrContainer}>
      {fetchData?.productCoreDtoList && fetchData?.productCoreDtoList?.length > 0 ? (
        fetchData?.productCoreDtoList?.map((li, i) => (
          <div className={styles.searchProduct} key={i}>
            <Link
              href={{
                pathname: `/product-details/${li.alias || li.productName}`,
                query: { id: li.productId },
              }}
            >
              <div className={styles.card} onClick={() => console.log("clicked product")}>
                <img src={li?.imageUrl === "null" ? "/images/products/ABC-Logo.png" : li?.imageUrl} alt="product" />
                <h2>
                  {li?.productName} <span>$ {li?.standardPrice}</span>
                </h2>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <>
          {!Debounce ? (
            <h3 className={styles.noResultFound}>Loading....</h3>
          ) : (
            <h3 className={styles.noResultFound}>
              No results found with &nbsp;
              <span>&ldquo;{searchData}&ldquo;</span>
            </h3>
          )}
        </>
      )}
      {fetchData?.productCoreDtoList && fetchData?.productCoreDtoList?.length > 0 && (
        <Link
          href={{
            pathname: `/all/search/${searchData}`,
          }}
        >
          <p className={styles.viewAll}> View all {fetchData?.totalCount} results</p>
        </Link>
      )}
      {error && <h3 className={styles.noResultFound}>something went wrong!</h3>}
    </div>
  );
};

export default SearchDropDown;
