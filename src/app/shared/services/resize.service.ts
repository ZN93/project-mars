import { Injectable } from '@angular/core';
import { fromEvent } from 'rxjs';

import {
  TailwindBreakpoints,
  TailwindBreakpointsStatus,
} from '@shared/utils/tailwind-breakpoints.utils';

@Injectable({
  providedIn: 'root',
})
export class ResizeService {
  #twBreakpoints: TailwindBreakpointsStatus = {
    isSm: false,
    isMd: false,
    isLg: false,
    isXl: false,
    is2Xl: false,
    isOver2Xl: false,
  };

  get twBreakpoints(): TailwindBreakpointsStatus {
    return this.#twBreakpoints;
  }

  constructor() {
    this.#updateBreakpointsOnResize();
  }

  #updateBreakpointsOnResize(): void {
    fromEvent(window, 'resize').subscribe(() => {
      const width = window.innerWidth;

      const isSm = width < TailwindBreakpoints.Sm;
      const isMd = !isSm && width < TailwindBreakpoints.Md;
      const isLg = !isMd && width < TailwindBreakpoints.Lg;
      const isXl = !isLg && width < TailwindBreakpoints.Xl;
      const is2Xl = !isXl && width < TailwindBreakpoints.DoubleXl;
      const isOver2Xl = !is2Xl;

      this.#twBreakpoints = {
        isSm,
        isMd,
        isLg,
        isXl,
        is2Xl,
        isOver2Xl,
      };

      console.log(isLg);
    });
  }
}
