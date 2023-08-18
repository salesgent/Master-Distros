import { StaticPage } from "@salesgenterp/ui-components";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Customers from "../src/components/home/customers/Customers";

const data = {
  mainTitle: "About Us",
  content: [
    {
      align: "center",
      h2: "Welcome to Mater Distros!",
    },
    {
      p: (
        <>
          We are a premier wholesale distributor of high-quality alternatives, vaporizers, and other specialty products.
          Our exclusive inventory includes a range of brands and products that are carefully curated to meet the diverse
          needs of our customers.
        </>
      ),
    },
    {
      p: (
        <>
          At Mater Distros, we are committed to delivering exceptional customer service and support. Our team of
          experienced professionals is dedicated to providing personalized assistance to ensure that each customer
          receives the products and services they need to succeed.
        </>
      ),
    },
    {
      p: (
        <>
          We take great pride in our product offerings, which include a variety of alternative. In addition, we also
          offer a wide selection of vaporizers, as well as other specialty products, including CBD products and
          supplements.
        </>
      ),
    },
    {
      p: (
        <>
          Our mission is to provide our customers with the best products at the most competitive prices, while also
          delivering the highest level of customer service and support. We are committed to building lasting
          relationships with our customers, and we believe that our success is directly tied to the success of our
          clients.
        </>
      ),
    },
    {
      p: (
        <>
          Whether you are a retailer or distributor, we invite you to explore our product offerings and discover the
          many benefits of working with Mater Distros. Thank you for choosing us as your wholesale distributor of
          choice.
        </>
      ),
    },
  ],
};

const Component = (props) => {
  return (
    <Container>
      <StaticPage data={data} colors={{ primaryColor: "#DDA60A" }} />
      <Customers />
    </Container>
  );
};

export default Component;

const Container = styled.div`
  p {
    font-size: 1.2rem;
  }
`;
