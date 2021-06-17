import { Button, chakra } from "@chakra-ui/react";
import useMouse from "@react-hook/mouse-position";
import { motion, useAnimation } from "framer-motion";
import React from "react";

const MotionBox = motion(chakra.span);

export interface ButtonProps {
  children: string;
  variant?: "primary-solid" | "secondary-solid";
  size?: "sm" | "md" | "lg";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ({ children, ...props }: ButtonProps) {
  if (typeof window === "undefined") return null;

  const ref = React.useRef<HTMLButtonElement>(null);

  const mouse = useMouse(ref, {
    enterDelay: 50,
    leaveDelay: 50,
  });
  const controls = useAnimation();

  return (
    <Button
      {...props}
      boxShadow="none !important"
      position="relative"
      overflow="hidden"
      ref={ref}
      onClick={async (e: React.MouseEvent<HTMLButtonElement>) => {
        const ww = ref.current?.offsetWidth;

        await controls.start({
          scale: [0, (ww! / 10) * 5],
          opacity: [1, 0],
          transition: { duration: 0.5 },
        });
        // Avoid big span over the element at the end
        controls.set({ scale: 0 });

        props.onClick && props.onClick(e);
      }}
    >
      <MotionBox
        position="absolute"
        borderRadius="50%"
        backgroundColor="rgba(255, 255, 255, 0.5)"
        top={`${mouse.y!}px`}
        left={`${mouse.x!}px`}
        transform="scale(0)"
        width="10px"
        height="10px"
        animate={controls}
      />
      {children}
    </Button>
  );
}
