import { screen } from "@testing-library/react";
import { expect } from "vitest";
import { render } from "@/testing/render";
import "@testing-library/jest-dom/vitest";
import Loader, { TestId } from "@/components/utils/loader";

describe("Loader", async () => {
  it("renders", () => {
    render(<Loader />);
    const loader = screen.getByTestId(TestId.ROOT);
    expect(loader).toBeInTheDocument();
  });
});
