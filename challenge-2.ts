/* reproduce forEach / map / filter using reduce - type safe */

function forEachRevisited<T>(items: T[], callback: (v: T) => void): void {
  items.reduce((acc, val) => {
    callback(val);
    return undefined;
  }, undefined);
}

forEachRevisited([1, 2, 3], (v) => console.log(v * 10));

function mapRevisited<T, K>(items: T[], callback: (v: T) => K): K[] {
  return items.reduce((acc, val) => [...acc, callback(val)], [] as K[]);
}

console.log(
  mapRevisited([1, 2, 3, 4, 5, 6, 7, 8, 9], (v) => (v * 10).toString())
);

function filterRevisited<T>(items: T[], callback: (v: T) => boolean): T[] {
  return items.reduce(
    (acc, val) => (callback(val) ? [...acc, val] : acc),
    [] as T[]
  );
}

console.log(filterRevisited([1, 2, 3, 4, 5, 6, 7, 8, 9], (v) => v % 2 === 0));
