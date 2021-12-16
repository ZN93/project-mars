export enum TailwindBreakpoints {
  Sm = 640,
  Md = 768,
  Lg = 1024,
  Xl = 1280,
  DoubleXl = 1536,
}

export interface TailwindBreakpointsStatus {
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  isXl: boolean;
  is2Xl: boolean;
  isOver2Xl: boolean;
}
