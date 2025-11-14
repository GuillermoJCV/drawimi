import { Button, Stack } from "@chakra-ui/react";
import SignIn from "./sign-in";
import SignUp from "./sign-up";
import { useState } from "react";

function LoginToggler() {
  const [isSignIn, setIsSignIn] = useState(false);
  return (
    <Stack data-testid={TestId.STACK}>
      <Button
        data-testid={TestId.BUTTON}
        colorPalette="green"
        variant="ghost"
        size="xs"
        onClick={() => setIsSignIn(!isSignIn)}
      >
        {isSignIn ? "Register instead" : "Sign In instead"}
      </Button>
      {isSignIn ? <SignIn /> : <SignUp />}
    </Stack>
  );
}

enum TestId {
  STACK = "login-toggler-stack-id",
  BUTTON = "login-toggler-button-id",
}
export default LoginToggler;
export { TestId };
