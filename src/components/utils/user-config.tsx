import { Drawer, CloseButton, Portal } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import useUserStore from "@/stores/user-store";
import UserToggler from "./user-config/user-toggler";
import LoginToggler from "./user-config/login-toggler";

function UserConfig() {
  const [open, setOpen] = useState(false);
  const user = useUserStore((state) => state.user);

  useEffect(() => {}, [user]);

  return (
    <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)} size="sm">
      <Drawer.Trigger asChild>
        <UserToggler open={open} setOpen={setOpen} />
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>{user ? "User Info" : "Log in"}</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <LoginToggler />
            </Drawer.Body>
            <Drawer.Footer></Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton onClick={() => setOpen(!open)} size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}

export default UserConfig;
