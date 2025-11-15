import { HStack, StackProps, Spacer } from "@chakra-ui/react";
import UserConfig from "@/components/utils/user-config";
import ConfigSetter from "@/components/utils/config-setter";
import DownloadOptionsPanel from "../utils/download-options";

type Args = Omit<StackProps, "children">;

function Header({ w = "100%", align = "start", ...props }: Args) {
  return (
    <HStack data-testid={TestId.HEADER} w={w} align={align} {...props}>
      <UserConfig />
      <Spacer />
      <DownloadOptionsPanel />
      <ConfigSetter />
    </HStack>
  );
}

enum TestId {
  HEADER = "header-stack-testid",
}
export default Header;
export { TestId };
