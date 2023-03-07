import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { HashRouter } from "react-router-dom";
import App from "./App";

const client = new ApolloClient({
  uri: "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clek4lopw0yjh01uo18csbig4/master",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <HashRouter>
        <App />
      </HashRouter>
    </ApolloProvider>
  </React.StrictMode>
);
