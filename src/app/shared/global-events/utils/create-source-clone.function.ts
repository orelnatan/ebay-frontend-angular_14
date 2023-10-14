
import { source } from '../models';

export function createSourceClone(source: source, excludes: string[] = []): source {
    return Object.keys(source).reduce((result: source, key) => {
        if (!excludes.includes(key)) {
            result[key] = source[key];
        }
        return result;
    }, {});
}
