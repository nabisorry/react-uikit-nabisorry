/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/core";
import useRipple from "../utils/customHook/useRipple";

export type ButtonProps = {
  /** 버튼안에 들어갈 텍스트을 입력합니다 */
  buttonText?: String;
  width?: string | number;
  height?: string | number;
  backgroundColor?: string;
  backgroundCircleColor?: string;
  color?: string;
};

type rippleType = any[];

const Button = ({
  buttonText,
  width,
  height,
  backgroundColor,
  backgroundCircleColor,
  color,
}: ButtonProps) => {
  const [addRipple, ripples]: rippleType = useRipple({
    backgroundColor: backgroundCircleColor ? backgroundCircleColor : "#AE8968",
  });
  const onClick = (e?: React.MouseEvent<HTMLButtonElement>): void => {
    const animationName = rippleAnimation.name;
    addRipple(e, animationName);
  };
  const customButtonStyles = { width, height, backgroundColor };
  const customTextStyles = { color };
  return (
    <div css={buttonBackground}>
      <button css={[buttonStyle, { ...customButtonStyles }]} onClick={onClick}>
        <p css={[buttonTextStyle, { ...customTextStyles }]}>{buttonText}</p>
        {ripples}
      </button>
    </div>
  );
};

Button.defaultProps = {
  buttonText: "문구를 입력하세요.",
};

const buttonBackground = css`
  display: inline-block;
`;

const rippleAnimation = keyframes`
  from {
    opacity:0.4            
  }
  to {
    transform: scale(15);
    opacity: 0;
  } 
`;

const buttonStyle = css`
  position: relative;
  width: 186px;
  height: 81px;
  border-radius: 20px;
  box-shadow: 3px 3px 3px 0 rgba(137, 137, 137, 0.08);
  background-color: #fecba3;
  border: 0;
  outline: 0;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  animation: ${rippleAnimation};
`;

const buttonTextStyle = css`
  width: 178px;
  height: 36px;
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: -0.16px;
  color: #ffffff;
`;

export default Button;
