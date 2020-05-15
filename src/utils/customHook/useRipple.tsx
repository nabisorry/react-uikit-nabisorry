/** @jsx jsx */
import { useState } from "react";
import { jsx, css, keyframes } from "@emotion/core";

type styleProps = {
  backgroundColor: string;
};

const MINIMUM_RIPPLE_SIZE: number = 100;

export default function useRipple(style: styleProps) {
  const [ripples, setRipples] = useState([]);

  // ts 수정해야함
  const showRipple = (event: any, animationName: string): void => {
    const { left, top } = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - left;
    const y = event.clientY - top;
    const rippleSize = Math.min(
      event.currentTarget.clientHeight,
      event.currentTarget.clientWidth,
      MINIMUM_RIPPLE_SIZE
    );

    const newRipple = {
      key: event.timeStamp,
      style: {
        display: "block",
        width: rippleSize,
        height: rippleSize,
        position: "absolute",
        left: x - rippleSize / 2,
        top: y - rippleSize / 2,
        borderRadius: "50%",
        opacity: 0.4,
        pointerEvents: "none",
        animationName: animationName,
        animationDuration: "0.7s",
        ...style,
      },
    };
    console.log(newRipple);
    // ts 수정해야 함
    setRipples((state): any => [...state, newRipple]);
  };

  // ts 수정 any 천국
  const ripplesArray = ripples.map((currentRipple: any): any => {
    const handleAnimationEnd = (): any => {
      setRipples((state): any =>
        state.filter(
          (previousRipple: any): any => previousRipple.key !== currentRipple.key
        )
      );
    };

    return <span {...currentRipple} onAnimationEnd={handleAnimationEnd} />;
  });

  return [showRipple, ripplesArray];
}
