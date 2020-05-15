/// <reference types="react" />
export declare type ButtonProps = {
    /** 버튼안에 들어갈 텍스트을 입력합니다 */
    buttonText?: String;
    width?: string | number;
    height?: string | number;
    backgroundColor?: string;
    backgroundCircleColor?: string;
    color?: string;
};
declare const Button: {
    ({ buttonText, width, height, backgroundColor, backgroundCircleColor, color, }: ButtonProps): JSX.Element;
    defaultProps: {
        buttonText: string;
    };
};
export default Button;
