declare type styleProps = {
    backgroundColor: string;
};
export default function useRipple(style: styleProps): (any[] | ((event: any, animationName: string) => void))[];
export {};
