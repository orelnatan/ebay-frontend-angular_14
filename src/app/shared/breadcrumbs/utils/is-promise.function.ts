
export function isPromise(object: Object): boolean {
  return object && Object.prototype.toString.call(object) === "[object Promise]";
}