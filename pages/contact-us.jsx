import { StaticPage } from "@salesgenterp/ui-components";
import getConfig from "next/config";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useDatafetcher } from "../src/utilities/hooks/useDatafetcher";

const data = {
  mainTitle: "Contact Us",
  content: [
    {
      p: (
        <>
          <p>
            <b>Phone: </b>
            <Link href="tel:+1 404-491-0786">+1 404-491-0786</Link>
          </p>
          <p>
            <b>Email: </b>
            <Link href="mailto:cs@masterdistros.com">cs@masterdistros.com</Link>
          </p>
        </>
      ),
    },
  ],
};

const { publicRuntimeConfig } = getConfig();
const { GOOGLE_RECAPTCHA_KEY, DOMAIN_BASE_URL } = publicRuntimeConfig;

const Component = (props) => {
  const token = useSelector((state) => state.auth.tokens?.token);
  const { data: store } = useDatafetcher("/store", true);
  const logoUrl = store?.[0]?.logoUrl || "/images/header/logo-full.png";

  return (
    <Container>
      <StaticPage
        data={data}
        colors={{ primaryColor: "#DDA60A" }}
        contactUsForm
        mapSrc=""
        apiEndPoint={DOMAIN_BASE_URL}
        token={token}
        googleReCaptchaKey={GOOGLE_RECAPTCHA_KEY}
        logoUrl={logoUrl}
      />
    </Container>
  );
};

export default Component;

const Container = styled.div`
  p {
    font-size: 1.2rem;
  }
`;
