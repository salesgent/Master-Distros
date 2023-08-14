import { Skeleton } from "@mui/material";
import { ProductsGrid } from "../../product-list/style";

////////////////////////////////////////////////////////////////

import {
  ImageBox,
  ProductCard,
  ProductContent,
  ProductName,
} from "../productCard.style";

const ProductCardSkeleton = ({ padding }) => {
  return (
    <ProductsGrid padding={!padding && "0"}>
      {[1, 2, 3, 4, 6, 7, 8, 9].map((i) => (
        <ProductCard className="product-card" key={i}>
          <ImageBox>
            <Skeleton
              animation="wave"
              variant="rectangular"
              style={{ height: "80%", width: "100%" }}
            />
          </ImageBox>
          <ProductContent marginRight="1em">
            <ProductName>
              <Skeleton
                animation="wave"
                variant="rectangular"
                height={160}
                style={{ width: "19.65rem", marginTop: "1em" }}
              />
            </ProductName>
            <span className="title">
              <Skeleton
                animation="wave"
                variant="text"
                height={30}
                width={140}
                // style={{ width: "180%" }}
              />
            </span>
            <ProductName>
              <Skeleton
                animation="wave"
                variant="rectangular"
                height={160}
                style={{ width: "5.65rem", marginTop: "1em" }}
              />
            </ProductName>
            <ProductName>
              <Skeleton
                animation="wave"
                variant="rectangular"
                height={160}
                style={{ width: "15.65rem", marginTop: "1em" }}
              />
            </ProductName>
          </ProductContent>
        </ProductCard>
      ))}
    </ProductsGrid>
  );
};

export default ProductCardSkeleton;
