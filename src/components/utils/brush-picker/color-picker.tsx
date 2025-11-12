import { ColorPicker, HStack, Portal, parseColor } from "@chakra-ui/react";
import useBrushConfig from "@/stores/brush-config-store";

type CustomArgs = {
  needInput?: boolean;
};
type Args = Omit<ColorPicker.RootProps, "children"> & CustomArgs;

function CustomColorPicker({ needInput = false }: Args) {
  const setBrushColor = useBrushConfig((state) => state.setColor);
  const currentBrushColor = useBrushConfig(
    (state) => state.config.color || "#86efac",
  );

  return (
    <ColorPicker.Root
      data-testid={TestId.COLOR_ROOT}
      defaultValue={parseColor(currentBrushColor.toString())}
      onValueChange={(e) => setBrushColor(e.value.toString("hex"))}
      maxW="200px"
    >
      <ColorPicker.HiddenInput />
      <ColorPicker.Control>
        <ColorPicker.Trigger
          data-testid={TestId.COLOR_TRIGGER}
          data-fit-content
          rounded="full"
        >
          <ColorPicker.ValueSwatch rounded="inherit" w="2.5rem" h="2.5rem" />
        </ColorPicker.Trigger>
        {needInput && <ColorPicker.Input data-testid={TestId.COLOR_INPUT} />}
      </ColorPicker.Control>
      <Portal>
        <ColorPicker.Positioner>
          <ColorPicker.Content zIndex="tooltip">
            <ColorPicker.Area />
            <HStack>
              <ColorPicker.EyeDropper size="sm" variant="outline" />
              <ColorPicker.Sliders />
            </HStack>
          </ColorPicker.Content>
        </ColorPicker.Positioner>
      </Portal>
    </ColorPicker.Root>
  );
}

enum TestId {
  COLOR_ROOT = "color-drawer-root",
  COLOR_TRIGGER = "color-drawer-trigger",
  COLOR_INPUT = "color-drawer-input",
}
export default CustomColorPicker;
export { TestId };
