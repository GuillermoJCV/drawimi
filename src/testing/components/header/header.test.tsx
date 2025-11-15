import { cleanup, screen } from "@testing-library/react";
import { expect } from "vitest";
import { render } from "@/testing/render";
import "@testing-library/jest-dom/vitest";
import Header, { TestId } from "@/components/header/header";

describe("Header", () => {
  afterEach(cleanup);

  it("renders", () => {
    render(<Header />);
    const header = screen.getByTestId(TestId.HEADER);

    expect(header).toBeInTheDocument();
  });
});
