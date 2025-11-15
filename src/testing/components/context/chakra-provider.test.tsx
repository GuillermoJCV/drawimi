import { cleanup, render, screen } from "@testing-library/react";
import { expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import ChakraProvider from "@/components/chakra-ui/provider";
import { Button } from "@chakra-ui/react";

describe("Chakra Context", () => {
  afterEach(cleanup);

  it("renders chakra components", async () => {
    const buttonTestId = "chakraProvider-button-testid";
    render(
      <ChakraProvider>
        <Button data-testid={buttonTestId}>Hello world</Button>
      </ChakraProvider>,
    );

    const button = screen.getByTestId(buttonTestId);

    expect(button).toBeInTheDocument();
  });
});
