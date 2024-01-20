import { DECORATOR_APPLIED } from "../consts";
import { Args } from "../models";

export function intercept<T>(instance: T): void {
  return (function<U extends Args>(): void {
    const prototype: InstanceType<U> = Object.getPrototypeOf(instance);
    const missing: boolean = !(DECORATOR_APPLIED in prototype);

    if(missing) {
      throw new Error('intercept() function cannot be used inside any Angular classes ' +
                      'that are not decorated with @Interceptor decorator');
    }

    (instance as InstanceType<U>).constructor.prototype._constructor(instance);
  })()
}
