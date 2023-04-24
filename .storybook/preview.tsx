import React from "react"
import { BrowserRouter } from "react-router-dom"

import { ApolloClient, InMemoryCache } from "@apollo/client"
import { ApolloProvider } from "@apollo/client/react"
import type { Preview } from "@storybook/react"
import { ThemeProvider } from "styled-components"

import { GlobalStyle } from "styles/global"
import { light } from "styles/theme"

const client = new ApolloClient({
  uri: `${process.env.API_URL}`,
  cache: new InMemoryCache({}),
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
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
  ],
}

export default preview
