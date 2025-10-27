import { VStack, Avatar, Separator, Spacer } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/chakra-ui/color-mode";
import CustomColorPicker from "./brush-picker-components/color-picker";
import CustomBrushPicker from "./brush-picker";
import CustomConfigSetter from "./config-setter";

function SideBar() {
  return (
    <VStack as="aside" maxW="2xs" gap="2rem" h="dvh" pt="8" pb="8">
      <Avatar.Root variant="subtle" colorPalette="green" w="3rem" h="3rem">
        <Avatar.Fallback name="Jasmine Diaz" />
      </Avatar.Root>
      <Separator w="8rem" />
      <CustomBrushPicker />
      <Spacer />
      <ColorModeButton rounded="full" variant="subtle" colorPalette="green" />
      <CustomConfigSetter />
    </VStack>
  );
}

export default SideBar;
