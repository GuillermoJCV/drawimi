import { cleanup, screen } from "@testing-library/react";
import { expect } from "vitest";
import { render } from "@/testing/render";
import "@testing-library/jest-dom/vitest";
import Footer, { TestId } from "@/components/footer/footer";

describe("Footer", () => {
  afterEach(cleanup);

  it("renders", () => {
    render(<Footer />);
    const footer = screen.getByTestId(TestId.FOOTER);

    expect(footer).toBeInTheDocument();
  });
});
