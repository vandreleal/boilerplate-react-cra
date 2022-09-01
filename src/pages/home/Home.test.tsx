import { render, screen } from "utils/test-utils"

import { Home } from "./Home"

test("renders boilerplate", () => {
  render(<Home />)
  expect(screen.getByText(/boilerplate/i)).toBeInTheDocument()
})
