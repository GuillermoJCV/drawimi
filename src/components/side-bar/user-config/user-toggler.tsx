import { useEffect, Dispatch, SetStateAction } from "react";
import { Button, IconButton, Avatar } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa6";
import userUserStore from "@/stores/user-store";

type Args = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

function UserToggler({ open, setOpen }: Args) {
  const user = userUserStore((state) => state.user);

  useEffect(() => {}, [user]);

  return (
    <Button
      onClick={() => setOpen(!open)}
      rounded="full"
      w="3rem"
      h="3rem"
      colorPalette="green"
    >
      {user ? (
        <Avatar.Root variant="subtle" colorPalette="green" w="3rem" h="3rem">
          {/*TODO: Use the two first letters of the email instead of "No User"*/}
          <Avatar.Fallback name={user?.displayName || "No User"} />
        </Avatar.Root>
      ) : (
        <IconButton
          variant="subtle"
          size="sm"
          w="3rem"
          h="3rem"
          aria-label="Authenticate"
          colorPalette="green"
          rounded="full"
        >
          <FaUser />
        </IconButton>
      )}
    </Button>
  );
}

export default UserToggler;
