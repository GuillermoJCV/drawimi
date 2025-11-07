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
  maxW = { smDown: "100%", md: "2xs" },
  gap = { smDown: "clamp(0.5rem, 5%, 2rem)", md: "2rem" },
  h = { smDown: "fit-content", md: "100%" },
  justify = "center",
  align = "center",
  direction = { smDown: "row", md: "column" },
  ...props
}: Args) {
  return (
    <Stack
      as={as}
      maxW={maxW}
      gap={gap}
      h={h}
      justify={justify}
      align={align}
      direction={direction}
      {...props}
    >
      <User />
      <Separator w="8rem" />
      <CustomBrushPickerPanel size="xs" />
      <CustomColorPicker needInput={false} />
      <Spacer />
      <DownloadOptionsPanel size="xs" />
      <ColorModeButton rounded="full" variant="subtle" colorPalette="green" />
      <CustomConfigSetterPanel size="xs" />
    </Stack>
  );
}

export default SideBar;
