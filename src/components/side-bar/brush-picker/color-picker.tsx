import { ColorPicker, HStack, Portal, parseColor } from "@chakra-ui/react";
import useBrushConfig from "@/stores/brush-config-store";

type Args = {
  needInput?: boolean;
};

function CustomColorPicker({ needInput = true }: Args) {
  const setBrushColor = useBrushConfig((state) => state.setColor);
  const currentBrushColor = useBrushConfig(
    (state) => state.config.color || "#86efac",
  );

  return (
    <ColorPicker.Root
      defaultValue={parseColor(currentBrushColor.toString())}
      onValueChange={(e) => setBrushColor(e.value.toString("hex"))}
      maxW="200px"
    >
      <ColorPicker.HiddenInput />
      <ColorPicker.Control>
        <ColorPicker.Trigger data-fit-content rounded="full">
          <ColorPicker.ValueSwatch rounded="inherit" w="2.5rem" h="2.5rem" />
        </ColorPicker.Trigger>
        {needInput && <ColorPicker.Input />}
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

export default CustomColorPicker;
