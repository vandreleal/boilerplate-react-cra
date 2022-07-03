import { FC, useState } from "react"
import { Route, Routes } from "react-router-dom"

import { ThemeProvider } from "styled-components"

import { Home } from "pages/home"

import { GlobalStyle } from "styles/global"
import { dark, light } from "styles/theme"

const App: FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  return (
    <ThemeProvider theme={isDarkTheme ? dark : light}>
      <GlobalStyle />
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
      <button
        id="themeToggle"
        type="button"
        onClick={() => setIsDarkTheme(!isDarkTheme)}
      >
        Change to {isDarkTheme ? "light" : "dark"} mode
      </button>
    </ThemeProvider>
  )
}

export default App
