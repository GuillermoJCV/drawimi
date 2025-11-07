import { HStack, StackProps, Spacer } from "@chakra-ui/react";
import UserConfig from "@/components/utils/user-config";
import ConfigSetter from "@/components/utils/config-setter";

type Args = Omit<StackProps, "children">;

/**
 * @description This component should be rendered when the device is tiny
 */
function Header({ w = "100%", align = "start", ...props }: Args) {
  return (
    <HStack w={w} align={align} {...props}>
      <UserConfig />
      <Spacer />
      <ConfigSetter />
    </HStack>
  );
}

export default Header;
