import { cleanup, renderHook } from "@testing-library/react";
import { expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import { useCreateEmailPass, useSignInEmailPass } from "@/hooks/firebase";
import useUserStore from "@/stores/user-store";

describe("Firebase Hooks", async () => {
  afterEach(cleanup);
  it("useCreateEmailPass returns a function", async () => {
    const { result } = renderHook(() => useCreateEmailPass());

    expect(result.current).toBeTypeOf("function");
  });

  it("useCreateEmailPass create a user", async () => {
    const { result } = renderHook(() => useCreateEmailPass());
    const createUser = result.current;

    await createUser(UserData.email, UserData.password);
    const user = useUserStore.getState().user;
    expect(user).toBeDefined();
  });

  it("useSignInEmailPass create a user", async () => {
    const { result } = renderHook(() => useSignInEmailPass());
    const signIn = result.current;

    await signIn(UserData.email, UserData.password);
    const user = useUserStore.getState().user;
    expect(user).toBeDefined();
  });
});

const UserData = {
  email: "example@gmail.com",
  password: "1234",
};
