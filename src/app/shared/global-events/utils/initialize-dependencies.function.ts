import { Injector, Provider, TypeProvider } from "@angular/core";

export function initializeDependencies(injector: Injector, deps: TypeProvider[]): Provider[] {
  return deps.map(
    dependency => injector.get(dependency));
}