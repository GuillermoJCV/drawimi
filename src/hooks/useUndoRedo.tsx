import useCanvasStore from "@/stores/canvas-store";
import useBackgroundStore from "@/stores/storeBackgrounds";
import { useCallback } from "react";
import { useRestoreBackground } from "./canvas/useRestoreBackground";

function useUndoRedo() {
  const decrementIndex = useBackgroundStore((state) => state.decrementIndex);
  const incrementIndex = useBackgroundStore((state) => state.incrementIndex);

  const { restoreBackground } = useRestoreBackground();

  const canvas = useCanvasStore((state) => state.canvas);
  const ctx = canvas?.getContext("2d");

  const undo = useCallback(() => {
    if (!canvas || !ctx) return;
    decrementIndex();
    restoreBackground();
  }, [canvas]);

  const redo = useCallback(() => {
    if (!canvas || !ctx) return;
    incrementIndex();
    restoreBackground();
  }, [canvas]);

  return {
    undo,
    redo,
  };
}

export default useUndoRedo;
