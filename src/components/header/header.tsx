import { HStack, StackProps } from "@chakra-ui/react";
import UserConfig from "@/components/utils/user-config";
import ConfigSetter from "@/components/utils/config-setter";

type Args = StackProps;

/**
 * @description This component should be rendered when the device is tiny
 */
function Header(props: Args) {
  return (
    <HStack {...props}>
      <UserConfig />

      <ConfigSetter />
    </HStack>
  );
}

export default Header;
