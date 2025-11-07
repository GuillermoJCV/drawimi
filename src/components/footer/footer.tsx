import { HStack, StackProps } from "@chakra-ui/react";
import EraserButton from "../utils/eraser-button";
import CustomBrushPicker from "../utils/brush-picker";
import CustomColorPicker from "../utils/brush-picker/color-picker";
import UndoRedoButton from "@/components/utils/undo-redo";

type Args = StackProps;

/**
 * @description This component should be rendered when the device is tiny
 */
function Footer(props: Args) {
  return (
    <HStack {...props}>
      <EraserButton />
      <CustomBrushPicker />
      <CustomColorPicker />
      <UndoRedoButton />
    </HStack>
  );
}

export default Footer;
