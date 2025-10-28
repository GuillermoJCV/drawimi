import { ColorPicker, HStack, Portal, parseColor } from "@chakra-ui/react";
import { type RefObject } from "react";
import { type ColorSource } from "pixi.js";

type Args = {
  colorRef: RefObject<ColorSource>;
};

function CustomColorPicker({ colorRef }: Args) {
  return (
    <ColorPicker.Root
      defaultValue={parseColor(colorRef.current.toString())}
      onValueChange={(e) => (colorRef.current = e.value.toString("hex"))}
      maxW="200px"
    >
      <ColorPicker.HiddenInput />
      <ColorPicker.Control>
        <ColorPicker.Trigger data-fit-content rounded="full">
          <ColorPicker.ValueSwatch rounded="inherit" w="2.5rem" h="2.5rem" />
        </ColorPicker.Trigger>
        <ColorPicker.Input />
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
