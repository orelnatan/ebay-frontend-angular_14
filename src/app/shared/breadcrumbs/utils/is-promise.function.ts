
export function isPromise(object: any): boolean {
  return object && Object.prototype.toString.call(object) === "[object Promise]";
}