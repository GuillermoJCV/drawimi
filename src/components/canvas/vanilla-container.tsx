import { Flex } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import Canvas from "@/components/canvas/vanilla-canvas";

function CanvasPaint() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [resizeTo, setResizeTo] = useState<DOMRect | null>(null);

  useEffect(() => {
    const div = containerRef.current;
    const observer = new ResizeObserver(() => resizeHandler(div));
    div && setResizeTo(div.getBoundingClientRect());

    div && observer.observe(div);
    return () => {
      observer.disconnect();
    };
  }, [containerRef.current]);

  const resizeHandler = (element: HTMLDivElement | null) =>
    element && setResizeTo(element.getBoundingClientRect());

  return (
    <Flex
      as="section"
      w="100%"
      h="100%"
      css={{
        overflow: "hidden",
        borderRadius: "2rem",
      }}
      ref={containerRef}
    >
      {resizeTo && <Canvas resizeTo={resizeTo} />}
    </Flex>
  );
}

export default CanvasPaint;
