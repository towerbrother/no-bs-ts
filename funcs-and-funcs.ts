/* general example - () => void is a type specification NOT a function */
export function printToFile(text: string, callback: () => void): void {
  console.log(text);
  callback();
}

/* you can define the callback function type separately */
type MutationFunction = (v: number) => number;
export function arrayMutate(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate);
}
console.log(arrayMutate([1, 2, 3], (v) => v * 10));

/* function returning a function (CLOSURE) */
type AdderFunction = (val: number) => number;
export function createAdder(num: number): AdderFunction {
  return (val: number) => val + num;
}
const addOne = createAdder(1); //addOne is a function type (val: number) => number
console.log(addOne(55)); //55 + 1
