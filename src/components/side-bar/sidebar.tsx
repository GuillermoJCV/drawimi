import { Stack, Separator, Spacer, type StackProps } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/chakra-ui/color-mode";
import CustomBrushPickerPanel from "../utils/brush-picker";
import CustomConfigSetterPanel from "../utils/config-setter";
import DownloadOptionsPanel from "../utils/download-options";
import CustomColorPicker from "../utils/brush-picker/color-picker";
import User from "../utils/user-config";

function SideBar() {
  return (
    //TODO: This component must be rendered just when the device is large
    // So it doesn't need conditional props anymore
    <Stack {...stackProps}>
      <User />
      <Separator w="8rem" hideBelow="sm" />
      <CustomBrushPickerPanel size="xs" />
      <CustomColorPicker needInput={false} />
      <Spacer hideBelow="sm" />
      <DownloadOptionsPanel size="xs" />
      <ColorModeButton rounded="full" variant="subtle" colorPalette="green" />
      <CustomConfigSetterPanel size="xs" />
    </Stack>
  );
}

const stackProps: StackProps & React.RefAttributes<HTMLDivElement> = {
  as: "aside",
  maxW: { smDown: "100%", md: "2xs" },
  gap: { smDown: "clamp(0.5rem, 5%, 2rem)", md: "2rem" },
  h: { smDown: "fit-content", md: "100%" },
  justify: "center",
  align: "center",
  direction: { smDown: "row", md: "column" },
};

export default SideBar;
