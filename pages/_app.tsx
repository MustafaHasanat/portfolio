import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import theme from "@/styles/theme";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import store from "@/utils/store/store";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </Provider>
    );
}
