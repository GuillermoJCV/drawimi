import { HStack, Slider, useSlider } from "@chakra-ui/react";
import useBrushConfig from "@/stores/brush-config-store";

function WidthSlider() {
  const setBrushWidth = useBrushConfig((state) => state.setWidth);
  const brushWidth: number | undefined = useBrushConfig(
    (state) => state.config.width,
  );
  const widthSlider = useSlider({
    defaultValue: [brushWidth || 10],
    thumbAlignment: "center",
  });

  return (
    <Slider.RootProvider
      data-testid={TestId.ROOT_PROVIDER}
      onChange={async () => setBrushWidth(widthSlider.value[0])}
      value={widthSlider}
      width="200px"
    >
      <HStack>
        <Slider.Label>Width</Slider.Label>
        <Slider.ValueText />
      </HStack>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.RootProvider>
  );
}

enum TestId {
  ROOT_PROVIDER = "root-provider",
}
export default WidthSlider;
export { TestId };
