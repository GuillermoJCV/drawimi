import useUndoRedo from "@/hooks/useUndoRedo";
import { Group, IconButton } from "@chakra-ui/react";
import { LuRedo, LuUndo } from "react-icons/lu";

function UndoRedoButton() {
  const { undo, redo } = useUndoRedo();

  return (
    <Group attached>
      <IconButton
        data-testid={TestId.UNDO_BUTTON}
        onClick={() => undo()}
        roundedTop="3xl"
        variant="subtle"
        colorPalette="green"
      >
        <LuUndo />
      </IconButton>
      <IconButton
        data-testid={TestId.REDO_BUTTON}
        onClick={() => redo()}
        roundedTop="3xl"
        variant="subtle"
        colorPalette="green"
      >
        <LuRedo />
      </IconButton>
    </Group>
  );
}

enum TestId {
  UNDO_BUTTON = "undoRedo-undoButton-testid",
  REDO_BUTTON = "undoRedo-redoButton-testid",
}
export default UndoRedoButton;
export { TestId };
