import { VStack, Avatar, Separator, Spacer } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/chakra-ui/color-mode";
import CustomBrushPickerPanel from "./brush-picker";
import CustomConfigSetterPanel from "./config-setter";
import DownloadOptionsPanel from "./download-options";
import CustomColorPicker from "./brush-picker/color-picker";
import UserConfig from "./user-config";

function SideBar() {
  return (
    <VStack as="aside" maxW="2xs" gap="2rem" h="dvh" pt="8" pb="8">
      <UserConfig />
      <Separator w="8rem" />
      <CustomBrushPickerPanel />
      <CustomColorPicker needInput={false} />
      <Spacer />
      <DownloadOptionsPanel />
      <ColorModeButton rounded="full" variant="subtle" colorPalette="green" />
      <CustomConfigSetterPanel />
    </VStack>
  );
}

export default SideBar;
