import React from "react"
import { BrowserRouter } from "react-router-dom"

import { ApolloClient, InMemoryCache } from "@apollo/client"
import { ApolloProvider } from "@apollo/client/react"
import { ThemeProvider } from "styled-components"

import { GlobalStyle } from "styles/global"
import { light } from "styles/theme"

const client = new ApolloClient({
  uri: `${process.env.API_URL}`,
  cache: new InMemoryCache({}),
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  Story => (
    <ApolloProvider client={client}>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  ),
]
