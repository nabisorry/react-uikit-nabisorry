/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Button from "./Button";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import mdx from "./Button.mdx";

export default {
  title: "components|planz|Button",
  component: Button,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: "planz-kiosk 기본 버튼",
    docs: {
      page: mdx,
    },
  },
};

export const button = () => {
  const buttonText = text("buttonText", "제출하기");
  return (
    <div css={styles}>
      <Button></Button>
      <Button
        width="300px"
        backgroundColor="red"
        color="black"
        backgroundCircleColor="black"
      ></Button>
    </div>
  );
};

export const smallButton = () => {};
button.story = {
  name: "Default",
};

const styles = css`
  margin: 10px;
`;
