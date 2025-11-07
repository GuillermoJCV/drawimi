import { Group, IconButton } from "@chakra-ui/react";
import { LuRedo, LuUndo } from "react-icons/lu";

function UndoRedoButton() {
  return (
    <Group attached>
      <IconButton>
        <LuUndo />
      </IconButton>
      <IconButton>
        <LuRedo />
      </IconButton>
    </Group>
  );
}

export default UndoRedoButton;
