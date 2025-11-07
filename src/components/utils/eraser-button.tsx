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
      rounded={rounded}
      variant={variant}
      colorPalette={colorPalette}
      {...props}
    >
      <BsEraserFill />
    </IconButton>
  );
}

export default EraserButton;
