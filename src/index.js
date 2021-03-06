import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloProvider } from "react-apollo";
import client from "./apollo";
import GlobalStyle from "./globalStyles";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App>
      <GlobalStyle />
    </App>
  </ApolloProvider>,
  document.getElementById("root")
);
