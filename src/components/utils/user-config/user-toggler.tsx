import { useEffect } from "react";
import { Avatar } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa6";
import userUserStore from "@/stores/user-store";

function UserToggler() {
  const user = userUserStore((state) => state.user);

  useEffect(() => {}, [user]);

  return (
    <>
      {user ? (
        <Avatar.Root
          data-testId={TestId.USER_DEFINED}
          variant="subtle"
          colorPalette="green"
          w="3rem"
          h="3rem"
        >
          {/*TODO: Use the two first letters of the email instead of "No Name"*/}
          <Avatar.Fallback name={user?.displayName || "No Name"} />
        </Avatar.Root>
      ) : (
        <FaUser data-testid={TestId.NO_USER} />
      )}
    </>
  );
}

enum TestId {
  USER_DEFINED = "userToggler-userAvatar-testId",
  NO_USER = "userToggler-userIcon-testId",
}
export default UserToggler;
export { TestId };
