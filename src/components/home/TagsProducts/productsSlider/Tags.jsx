import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDatafetcher } from "../../../../utilities/hooks/useDatafetcher";
import Banner from "../../Banner/Banner";
import ProductSlider from "../../productsSlider/ProductSlider";

import BrandCarousel from "../../Brands/Brands";
import BrandsDetail from "../../Brands/BrandsDetail";
// import TopCateogries from "../../categories/topCategories";

const TagsContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Tags = ({ bannerAfterSecondary }) => {
  const { data, error } = useDatafetcher(`/home/productTagList`, true);

  const [showBanners, setShowBanners] = useState(false);
  useEffect(() => {
    if (data && data?.length === 1) {
      setShowBanners(true);
    }
  }, []);

  return (
    <TagsContainer>
      {data &&
        data.map((products, i) => (
          <div key={i}>
            <ProductSlider data={products} />
            {showBanners ||
              (i === 0 && (
                <>
                  <Banner bannerAfterSecondary={bannerAfterSecondary} />
                </>
              ))}
          </div>
        ))}
      <BrandCarousel />
      {/* <BrandsDetail /> */}
    </TagsContainer>
  );
};

export default Tags;
