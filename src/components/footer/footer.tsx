import { HStack, StackProps, Spacer } from "@chakra-ui/react";
import EraserButton from "../utils/eraser-button";
import CustomBrushPicker from "../utils/brush-picker";
import CustomColorPicker from "../utils/brush-picker/color-picker";
import UndoRedoButton from "@/components/utils/undo-redo";

type Args = Omit<StackProps, "children">;

/**
 * @description This component should be rendered when the device is tiny
 */
function Footer({ w = "100%", ...props }: Args) {
  return (
    <HStack w={w} {...props}>
      <EraserButton />
      <CustomBrushPicker />
      <CustomColorPicker needInput={false} />
      <Spacer />
      <UndoRedoButton />
    </HStack>
  );
}

export default Footer;
