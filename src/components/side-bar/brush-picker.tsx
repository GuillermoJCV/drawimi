import {
  Drawer,
  Button,
  CloseButton,
  Portal,
  IconButton,
  VStack,
  useSlider,
} from "@chakra-ui/react";
import ColorPicker from "./brush-picker-components/color-picker";
import WidthSlider from "./brush-picker-components/width-slider";
import { RiBrushFill } from "react-icons/ri";
import useBrushConfig from "@/stores/brush-config-store";

function CustomBrushPicker() {
  const setBrushWidth = useBrushConfig((state) => state.setWidth);
  const widthSlider = useSlider({
    defaultValue: [20],
    thumbAlignment: "center",
  });

  const updateBrush = () => {
    setBrushWidth(widthSlider.value[0]);
  };

  return (
    <Drawer.Root size="xs">
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
                <WidthSlider slider={widthSlider} />
              </VStack>
            </Drawer.Body>
            <Drawer.Footer>
              <Drawer.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Drawer.ActionTrigger>
              <Drawer.ActionTrigger asChild>
                <Button onClick={updateBrush}>Save</Button>
              </Drawer.ActionTrigger>
            </Drawer.Footer>
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
