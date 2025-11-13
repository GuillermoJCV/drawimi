import { IconButton, IconButtonProps } from "@chakra-ui/react";
import { BsEraserFill } from "react-icons/bs";
type Args = Omit<IconButtonProps, "children">;

function EraserButton({
  rounded = "full",
  variant = "subtle",
  colorPalette = "green",
  ...props
}: Args) {
  return (
    <IconButton
      data-testid={TestId.ERASER_BUTTON}
      rounded={rounded}
      variant={variant}
      colorPalette={colorPalette}
      {...props}
    >
      <BsEraserFill />
    </IconButton>
  );
}

enum TestId {
  ERASER_BUTTON = "eraser-button",
}
export default EraserButton;
export { TestId };
