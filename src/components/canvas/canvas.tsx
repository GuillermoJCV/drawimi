import { Flex as ChakraFlex } from "@chakra-ui/react";
import { Application } from "@pixi/react";
import { useRef } from "react";
import PixiContainer from "./pixi-container";

function CanvasPaint() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <ChakraFlex
      ref={containerRef}
      m="0"
      p="0"
      w="100%"
      h="100%"
      css={{
        borderRadius: "3rem",
        overflow: "hidden",
      }}
    >
      <Application
        preference="webgpu"
        backgroundColor="#ffffff"
        resizeTo={containerRef}
        antialias={true}
      >
        <PixiContainer />
      </Application>
    </ChakraFlex>
  );
}
export default CanvasPaint;
