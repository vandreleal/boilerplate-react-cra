import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import { ApolloClient, InMemoryCache } from "@apollo/client"
import { ApolloProvider } from "@apollo/client/react"
import { ThemeProvider } from "styled-components"

import App from "./App"
import reportWebVitals from "./reportWebVitals"
import GlobalStyle from "./styles/global"

const client = new ApolloClient({
  uri: `${process.env.API_URL}/graphql`,
  cache: new InMemoryCache({}),
})

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

// Define what main theme will look like
const theme = {}

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
