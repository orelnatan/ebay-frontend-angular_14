import { Data } from "@angular/router";

import { wait } from '../utils';

export async function dispatch(type: string, data: Data = {}, delay: number = 0): Promise<void> {
  await wait(delay);

  window.dispatchEvent(new CustomEvent(type, {
      detail: data
    })
  )
}