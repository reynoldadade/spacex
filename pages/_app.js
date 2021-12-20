import "../styles/globals.css";
import Layout from "../components/Layout.js";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql",
  cache: new InMemoryCache(),
});
export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
