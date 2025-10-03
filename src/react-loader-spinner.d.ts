declare module 'react-loader-spinner' {
  import { FC } from 'react';

  interface LoaderProps {
    height?: string | number;
    width?: string | number;
    color?: string;
    secondaryColor?: string;
    ariaLabel?: string;
    wrapperStyle?: React.CSSProperties;
    wrapperClass?: string;
    visible?: boolean;
    strokeWidth?: number;
    strokeWidthSecondary?: number;
  }

  export const Oval: FC<LoaderProps>;
  export const Audio: FC<LoaderProps>;
  export const BallTriangle: FC<LoaderProps>;
  export const Bars: FC<LoaderProps>;
  export const Circles: FC<LoaderProps>;
  export const Grid: FC<LoaderProps>;
  export const Hearts: FC<LoaderProps>;
  export const Puff: FC<LoaderProps>;
  export const Rings: FC<LoaderProps>;
  export const TailSpin: FC<LoaderProps>;
  export const ThreeDots: FC<LoaderProps>;
}
