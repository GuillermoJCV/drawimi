import { IconButton, IconButtonProps } from "@chakra-ui/react";
import { BsEraserFill } from "react-icons/bs";

type Args = Omit<IconButtonProps, "children">;

function EraserButton(props: Args) {
  return (
    <IconButton {...props}>
      <BsEraserFill />
    </IconButton>
  );
}

export default EraserButton;
