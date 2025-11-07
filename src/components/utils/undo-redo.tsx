import { Group, IconButton } from "@chakra-ui/react";
import { LuRedo, LuUndo } from "react-icons/lu";

function UndoRedoButton() {
  return (
    <Group attached>
      <IconButton roundedTop="3xl" variant="subtle" colorPalette="green">
        <LuUndo />
      </IconButton>
      <IconButton roundedTop="3xl" variant="subtle" colorPalette="green">
        <LuRedo />
      </IconButton>
    </Group>
  );
}

export default UndoRedoButton;
