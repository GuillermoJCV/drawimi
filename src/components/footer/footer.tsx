import { HStack, StackProps, Spacer } from "@chakra-ui/react";
import EraserButton from "../utils/eraser-button";
import CustomBrushPicker from "../utils/brush-picker";
import CustomColorPicker from "../utils/brush-picker/color-picker";
import UndoRedoButton from "@/components/utils/undo-redo";

type Args = Omit<StackProps, "children">;

function Footer({ w = "100%", ...props }: Args) {
  return (
    <HStack data-testid={TestId.FOOTER} w={w} {...props}>
      <EraserButton />
      <CustomBrushPicker />
      <CustomColorPicker needInput={false} />
      <Spacer />
      <UndoRedoButton />
    </HStack>
  );
}

enum TestId {
  FOOTER = "footer-stack-testid",
}
export default Footer;
export { TestId };
