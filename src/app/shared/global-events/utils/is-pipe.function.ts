import { IPipeType } from "../models";
import { NG_PIPE_DEF } from "../consts";

export function isPipe<T>(target: any): target is IPipeType<T> {
  return !!target[NG_PIPE_DEF];
}
