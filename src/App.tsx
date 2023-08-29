import "./App.css";
import { MantineProvider } from "@mantine/core";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import HomeController from "./controllers/home.controller";

const client = new ApolloClient({
  uri: "http://localhost:4000/api/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <HomeController />
        </MantineProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
