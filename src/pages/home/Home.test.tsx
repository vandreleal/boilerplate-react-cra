import { render, screen } from "@testing-library/react"

import { Home } from "./Home"

test("renders boilerplate", () => {
  render(<Home />)
  const linkElement = screen.getByText(/boilerplate/i)
  expect(linkElement).toBeInTheDocument()
})
