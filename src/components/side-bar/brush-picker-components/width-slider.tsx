import { Slider, UseSliderReturn } from "@chakra-ui/react";

type Args = {
  slider: UseSliderReturn;
};

function WidthSlider({ slider }: Args) {
  return (
    <Slider.RootProvider value={slider} width="200px">
      <Slider.Label>Width</Slider.Label>
      <Slider.Control>
        <Slider.Track>
          <Slider.Range />
        </Slider.Track>
        <Slider.Thumbs />
      </Slider.Control>
    </Slider.RootProvider>
  );
}

export default WidthSlider;
