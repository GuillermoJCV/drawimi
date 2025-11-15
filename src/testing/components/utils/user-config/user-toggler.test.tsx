import { screen, cleanup } from "@testing-library/react";
import { expect } from "vitest";
import { render } from "@/testing/render";
import "@testing-library/jest-dom/vitest";
import UserToggler, {
  TestId,
} from "@/components/utils/user-config/user-toggler";
import useUserStore from "@/stores/user-store";

describe("User Toggler", () => {
  beforeEach(cleanup);

  it("start getting no user", () => {
    const user = useUserStore.getState().user;

    expect(user).toBeNull();
  });

  it("renders icon when there's no user", () => {
    render(<UserToggler />);
    const icon = screen.getByTestId(TestId.NO_USER);
    expect(icon).toBeInTheDocument();
  });

  // Learn how to mock firebase users
  // it("renders avatar when there's a user", () => {
  //   const setUser = useUserStore().setUser;
  //   setUser({});
  //   render(<UserToggler />);
  // });
});
