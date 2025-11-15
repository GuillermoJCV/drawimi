import { cleanup, render, renderHook, screen } from "@testing-library/react";
import { expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import FirebaseProvider, {
  FirebaseContext,
} from "@/components/context/firebase-context";
import { useContext } from "react";

describe("Firebase Context", () => {
  afterEach(cleanup);

  it("renders firebase context", async () => {
    render(
      <FirebaseProvider>
        <p>Hello world</p>
      </FirebaseProvider>,
    );

    const content = screen.getByText("Hello world");

    expect(content).toBeInTheDocument();
  });

  it("define auth and app properties", async () => {
    render(
      <FirebaseProvider>
        <p>Hello world</p>
      </FirebaseProvider>,
    );
    const { result } = renderHook(() => useContext(FirebaseContext));
    const app = result.current.app;
    const auth = result.current.auth;

    expect(app).toBeDefined();
    expect(auth).toBeDefined();
  });
});
