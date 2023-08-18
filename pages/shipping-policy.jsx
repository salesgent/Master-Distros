import { StaticPage } from "@salesgenterp/ui-components";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const data = {
  mainTitle: "Shipping and Returns",
  content: [
    {
      p: "Welcome to Mater Distros USA! This page outlines our shipping and returns policies for any products you purchase from our website.",
    },
    {
      pb: "Shipping",
      p: (
        <>
          We currently offer shipping within the United States. Orders are typically processed and shipped within 1-2
          business days. You will receive a shipping confirmation email with tracking information once your order has
          shipped. Shipping costs will be calculated at checkout based on the weight of your order and your location.
        </>
      ),
    },
    {
      pb: "Returns ",
      p: (
        <>
          {" "}
          If you are not satisfied with your purchase, you may return the item(s) for a refund or exchange within 30
          days of the purchase date. To be eligible for a return, the item(s) must be unused and in the same condition
          that you received it. To initiate a return, please contact our customer service team by phone or email.
        </>
      ),
    },
    {
      pb: "Refunds ",
      p: (
        <>
          Once your return is received and inspected, we will send you an email to notify you that we have received your
          returned item. We will also notify you of the approval or rejection of your refund. If your return is
          approved, your refund will be processed, and a credit will automatically be applied to your original method of
          payment within a certain number of days.
        </>
      ),
    },
    {
      pb: "Exchanges ",
      p: (
        <>
          {" "}
          If you need to exchange an item for a different variant, please contact our customer service team by phone or
          email. We will be happy to assist you with the exchange process and ensure that you receive the item(s) you
          need.
        </>
      ),
    },
    {
      pb: "Shipping Costs for Returns and Exchanges",
      p: (
        <>
          {" "}
          You will be responsible for paying the shipping costs for returning or exchanging your item(s). Shipping costs
          are non-refundable.
        </>
      ),
    },
    {
      pb: "Damaged or Defective Items",
      p: (
        <>
          If you receive a damaged or defective item, please contact our customer service team by phone or email. We
          will provide you with instructions on how to return the item and receive a replacement or refund.
        </>
      ),
    },
    {
      p: (
        <>
          We strive to provide the best possible customer service and ensure that our customers are completely satisfied
          with their purchases. If you have any questions or concerns regarding our shipping and returns policies,
          please do not hesitate to contact our customer service team.
        </>
      ),
    },
  ],
};

const Component = (props) => {
  return (
    <Container>
      <StaticPage data={data} colors={{ primaryColor: "#DDA60A" }} />
    </Container>
  );
};

export default Component;

const Container = styled.div`
  p {
    font-size: 1.2rem;
  }
`;
