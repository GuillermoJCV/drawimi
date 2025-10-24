import { type Size } from "@/types/components/canvas/size";
import { Flex as ChakraFlex } from "@chakra-ui/react";
import { Application, extend } from "@pixi/react";
import { Container, Graphics } from "pixi.js";
import { useRef } from "react";
import PixiContainer from "./PixiContainer";

extend({
  Container,
  Graphics,
});

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
      >
        <PixiContainer />
      </Application>
    </ChakraFlex>
  );
}
export default CanvasPaint;
