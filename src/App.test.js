import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders 'Preview without a YNAB account' link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Preview without a YNAB account/i, {
    selector: "button",
  });
  expect(linkElement).toBeInTheDocument();
});
