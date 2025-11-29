import { Stack, Separator, Spacer, type StackProps } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/chakra-ui/color-mode";
import CustomBrushPickerPanel from "../utils/brush-picker";
import CustomConfigSetterPanel from "../utils/config-setter";
import DownloadOptionsPanel from "../utils/download-options";
import CustomColorPicker from "../utils/brush-picker/color-picker";
import User from "../utils/user-config";

type Args = Omit<StackProps & React.RefAttributes<HTMLDivElement>, "children">;

function SideBar({
  as = "aside",
  maxW = { sm: "sm", md: "2xs" },
  gap = { sm: "0.5rem", md: "2rem" },
  h = "100%",
  justify = "center",
  align = "center",
  ...props
}: Args) {
  return (
    <Stack
      data-testid={TestId.ASIDE_BAR}
      paddingBlock="1rem"
      as={as}
      maxW={maxW}
      gap={gap}
      h={h}
      justify={justify}
      align={align}
      {...props}
    >
      <User />
      <Separator w="8rem" />
      <CustomBrushPickerPanel size="xs" />
      <CustomColorPicker />
      <Spacer />
      <DownloadOptionsPanel size="xs" />
      <ColorModeButton rounded="full" variant="subtle" colorPalette="green" />
      <CustomConfigSetterPanel size="xs" />
    </Stack>
  );
}

enum TestId {
  ASIDE_BAR = "sidebar-aside-testid",
}
export default SideBar;
export { TestId };
