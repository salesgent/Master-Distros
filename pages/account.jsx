import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AccountDetails } from "@salesgenterp/ui-components";
import getConfig from "next/config";
import { useRouter } from "next/router";
import "react-credit-cards/es/styles-compiled.css";

const Account = () => {
  const router = useRouter();
  const path = router?.query?.path;
  const { publicRuntimeConfig } = getConfig();
  const { DOMAIN_BASE_URL } = publicRuntimeConfig;
  const token = useSelector((state) => state.auth.tokens?.token);

  const [colors, setColors] = useState({
    primaryColor: "#2F2E5E",
    secondaryColor: "#FFFFFF",
    backgroundColor: "#F5F5F5",
    fontColor: "#391111",
    backgroundImage: "/images/backgroundLight.png",
  });

  const onChangeColors = (data) => {
    data?.isNightMode
      ? setColors({
          primaryColor: "#2F2E5E",
          secondaryColor: "#35353A",
          backgroundColor: "#1E1E23",
          fontColor: "#fff",
          backgroundImage: "/images/backgroundDark.png",
        })
      : setColors({
          primaryColor: "#2F2E5E",
          secondaryColor: "#FFFFFF",
          backgroundColor: "#F5F5F5",
          fontColor: "#391111",
          backgroundImage: "/images/backgroundLight.png",
        });
  };

  const onChangePath = (path) => {
    router.push(`/account?path=${path}`);
  };

  return (
    <div>
      {token && (
        <AccountDetails
          apiEndPoint={DOMAIN_BASE_URL}
          token={token}
          payInvoiceFromDashboard={true}
          primaryColor={colors.primaryColor}
          secondaryColor={colors.secondaryColor}
          backgroundColor={colors.backgroundColor}
          fontColor={colors.fontColor}
          backgroundImage={colors.backgroundImage}
          onChangeColors={onChangeColors}
          darkMode={false}
          path={path}
          onChangePath={onChangePath}
        />
      )}
    </div>
  );
};

export default Account;
