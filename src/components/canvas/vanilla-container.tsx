import { Flex, FlexProps } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import Canvas from "@/components/canvas/vanilla-canvas";

type Args = Omit<FlexProps, "children" & "ref">;

function CanvasPaint({
  as = "section",
  w = "100%",
  h = "100%",
  css,
  ...props
}: Args) {
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
      as={as}
      w={w}
      h={h}
      css={{
        overflow: "hidden",
        borderRadius: "2rem",
        ...css,
      }}
      ref={containerRef}
      {...props}
    >
      {resizeTo && <Canvas resizeTo={resizeTo} />}
    </Flex>
  );
}

export default CanvasPaint;
