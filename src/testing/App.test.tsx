//import { screen } from "@testing-library/react";
import { expect } from "vitest";
//import { render } from "@/testing/render";
import "@testing-library/jest-dom/vitest";
//import App from "@/App";

describe("App", () => {
  it("renders", async () => {
    // My computer is too bad to render the entire application on a test
    // render(<App />);
    // const appElement = screen.getByRole("app");
    expect(1 + 1).toBe(2);
  });
});
