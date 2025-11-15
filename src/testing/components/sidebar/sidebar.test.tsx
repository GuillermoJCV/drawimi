import { cleanup, screen } from "@testing-library/react";
import { expect } from "vitest";
import { render } from "@/testing/render";
import "@testing-library/jest-dom/vitest";
import Sidebar, { TestId } from "@/components/side-bar/sidebar";

describe("Sidebar", () => {
  afterEach(cleanup);

  it("renders", () => {
    render(<Sidebar />);
    const sidebar = screen.getByTestId(TestId.ASIDE_BAR);

    expect(sidebar).toBeInTheDocument();
  });
});
