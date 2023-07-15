import { FC, ReactElement, ReactNode } from "react"
import { BrowserRouter } from "react-router-dom"

import { ApolloClient, InMemoryCache } from "@apollo/client"
import { ApolloProvider } from "@apollo/client/react"
import { render, RenderOptions } from "@testing-library/react"
import { ThemeProvider } from "styled-components"

import { GlobalStyle } from "styles/global"
import { light } from "styles/theme"

const client = new ApolloClient({
  uri: `${process.env.API_URL}`,
  cache: new InMemoryCache({}),
})

const AllTheProviders: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ThemeProvider theme={light}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </BrowserRouter>
    </ApolloProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from "@testing-library/react"
export { default as userEvent } from "@testing-library/user-event"
export { customRender as render }
