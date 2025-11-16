import { Drawer, CloseButton, Portal, Button } from "@chakra-ui/react";
import { useEffect } from "react";
import useUserStore from "@/stores/user-store";
import UserToggler from "./user-config/user-toggler";
import LoginToggler from "./user-config/login-toggler";

type Args = Omit<Drawer.RootProps, "children">;

function UserConfig({ size = "sm", ...props }: Args) {
  const user = useUserStore((state) => state.user);

  useEffect(() => {}, [user]);

  return (
    <Drawer.Root size={size} {...props}>
      <Drawer.Trigger data-testid={TestId.TRIGGER} asChild>
        <Button
          rounded="full"
          w="3rem"
          h="3rem"
          variant="subtle"
          colorPalette="green"
        >
          <UserToggler />
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner data-testid={TestId.POSITIONER}>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>{user ? "User Info" : "Log in"}</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <LoginToggler />
            </Drawer.Body>
            <Drawer.Footer></Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}

enum TestId {
  TRIGGER = "userConfig-trigger-testid",
  POSITIONER = "userConfig-positioner-testid",
}
export default UserConfig;
export { TestId };
