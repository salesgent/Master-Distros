import { StaticPage } from "@salesgenterp/ui-components";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const data = {
  mainTitle: "Privacy Policy",
  content: [
    {
      p: (
        <>
          At Mater Distros, we are committed to protecting the privacy and security of our customers&apos; personal
          information. This Privacy Policy describes how we collect, use, and disclose personal information in
          connection with our business operations.
        </>
      ),
    },
    {
      p: (
        <>
          Collection of Personal Information We collect personal information from our customers in various ways,
          including when they place an order, create an account on our website, subscribe to our newsletter, or contact
          us for customer support. The types of personal information we collect may include name, email address, phone
          number, shipping and billing address, payment information, and other information necessary to fulfill orders
          and provide customer service.
        </>
      ),
    },
    {
      p: (
        <>
          Use of Personal Information We use personal information collected from our customers to process orders,
          provide customer support, communicate with customers about their orders and other matters related to their
          account, send promotional emails and newsletters, and improve our website and services. We may also use
          personal information for market research and other business purposes, provided that any such use is done in a
          manner that does not personally identify our customers.
        </>
      ),
    },
    {
      p: (
        <>
          Disclosure of Personal Information We may disclose personal information to third-party service providers who
          perform services on our behalf, such as payment processing, shipping, and marketing. We may also disclose
          personal information as required by law, such as in response to a subpoena, court order, or other legal
          process. In the event of a merger, acquisition, or sale of all or part of our business, personal information
          may be transferred to the acquiring company.
        </>
      ),
    },
    {
      p: (
        <>
          Data Security We take reasonable measures to protect personal information from unauthorized access,
          disclosure, and use. This includes physical, technical, and administrative safeguards to prevent unauthorized
          access, use, or disclosure of personal information. However, no data transmission over the internet or
          electronic storage can be guaranteed to be 100% secure, so we cannot guarantee the absolute security of
          personal information.
        </>
      ),
    },
    {
      p: (
        <>
          Your Choices Customers can choose to opt-out of receiving marketing emails from us by clicking the
          &quot;unsubscribe&quot; link at the bottom of our emails. Customers can also request to access, correct, or
          delete their personal information by contacting us using the contact information below.
        </>
      ),
    },
    {
      p: (
        <>
          Updates to this Privacy Policy We may update this Privacy Policy from time to time to reflect changes in our
          practices or legal requirements. We will notify customers of any material changes to this Privacy Policy by
          posting the updated policy on our website or by sending an email notification to customers.
        </>
      ),
    },
    {
      p: (
        <>
          <p>
            Contact Us If you have any questions or concerns about this Privacy Policy, please contact us at the
            following address:
          </p>
          <p>
            Mater Distros USA LLC
            <br />
            4662 N Royal Atlanta Dr
            <br />
            Tucker, GA 30084 <br />
            <Link href={"mailto:cs@masterdistros.coms"} style={{ color: "#DDA60A" }}>
              cs@masterdistros.coms
            </Link>
          </p>
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
