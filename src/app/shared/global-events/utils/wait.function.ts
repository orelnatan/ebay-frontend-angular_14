
export function wait(ms: number): Promise<unknown> {
  return new Promise(
    (resolve: (value: PromiseLike<unknown>) => void) => setTimeout(resolve, ms)
  );
}