import {
  Drawer,
  CloseButton,
  Portal,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import ColorPicker from "./brush-picker/color-picker";
import WidthSlider from "./brush-picker/width-slider";
import { RiBrushFill } from "react-icons/ri";

type Args = Omit<Drawer.RootProps, "children">;

function CustomBrushPicker(props: Args) {
  return (
    <Drawer.Root {...props}>
      <Drawer.Trigger asChild>
        <IconButton
          variant="subtle"
          size="sm"
          w="2.5rem"
          h="2.5rem"
          aria-label="Configure the brush"
          colorPalette="green"
          rounded="full"
        >
          <RiBrushFill />
        </IconButton>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Brush Config</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <VStack gap="2rem">
                <ColorPicker />
                <WidthSlider />
              </VStack>
            </Drawer.Body>
            <Drawer.Footer>{/* Idk if add something here */}</Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}

export default CustomBrushPicker;
