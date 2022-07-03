import { render, screen } from "utils/test-utils"

import { Home } from "./Home"

test("renders boilerplate", () => {
  render(<Home />)
  const linkElement = screen.getByText(/boilerplate/i)
  expect(linkElement).toBeInTheDocument()
})
