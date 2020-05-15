import { addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"; // 기본값

// 커스텀 값
const customViewports = {
  kiosk: {
    name: "kiosk",
    styles: {
      width: "1920px",
      height: "1080px",
    },
  },
};

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...customViewports,
    },
  },
});
