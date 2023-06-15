import { render, screen, logRoles } from "@testing-library/react";
import App from "./App";

test("test 1", () => {
  render(<App />);

  // Using logRoles
  logRoles(screen.getByTestId("myRootDiv"))

  // Test file extentions --> .test.js | .spec.js | .js(__tests__)
  // Accessing Button using screen
  const btnElement = screen.getByRole("button", {
    name: "Test Button",
    exact: false,
  });

  expect(btnElement).toBeInTheDocument();
});
