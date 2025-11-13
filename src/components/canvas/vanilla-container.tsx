import { Flex, FlexProps } from "@chakra-ui/react";
import { useRef, useState, useEffect, lazy, Suspense } from "react";
import Loader from "@/components/utils/loader";
//import Canvas from "@/components/canvas/vanilla-canvas";

const Canvas = lazy(() => import("@/components/canvas/vanilla-canvas"));

type Args = Omit<FlexProps, "children" & "ref">;

function CanvasPaint({
  as = "section",
  w = "100%",
  h = "100%",
  align = "center",
  justify = "center",
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
      align={align}
      justify={justify}
      css={{
        overflow: "hidden",
        borderRadius: "2rem",
        ...css,
      }}
      ref={containerRef}
      {...props}
    >
      <Suspense fallback={<Loader />}>
        {resizeTo && <Canvas resizeTo={resizeTo} />}
      </Suspense>
    </Flex>
  );
}

export default CanvasPaint;
