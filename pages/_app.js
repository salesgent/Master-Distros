import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { SWRConfig } from "swr";
import dynamic from "next/dynamic";
import { StyledEngineProvider } from "@mui/material/styles";
import "../styles/checkout.scss";
/////////////////////
import "../styles/globals.scss";
import theme from "../src/utilities/theme/theme";
import Layout from "../src/components/layout/Layout";
import { store } from "../src/store/store";
import { Provider } from "react-redux";
import { fetcher } from "../src/service/fetcher";

const Notify = dynamic(() =>
  import("../src/utilities/Notification/Notification")
);

function MyApp({ Component, pageProps }) {
  return (
    <StyledThemeProvider theme={theme}>
      <Provider store={store}>
        {/* <PersistGate loading={null} persisror={persistor}> */}
        <SWRConfig value={{ fetcher: fetcher }}>
          <Notify />
          <StyledEngineProvider injectFirst>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </StyledEngineProvider>
        </SWRConfig>
        {/* </PersistGate> */}
      </Provider>
    </StyledThemeProvider>
  );
}

export default MyApp;
