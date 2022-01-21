// tuples are array - each element can be named and given a specific type

type ThreeDCoordinate = [x: number, y: number, z: number];

function add3DCoordinate(
  c1: ThreeDCoordinate,
  c2: ThreeDCoordinate
): ThreeDCoordinate {
  return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}

console.log(add3DCoordinate([0, 0, 0], [10, 20, 30]));

/* React Engineer --> useState is a TUPLE */

function simpleStringState(
  initial: string
): [() => string, (v: string) => void] {
  //return of the FN -> accessor (here FN) + setter
  let str: string = initial;
  return [
    () => str,
    (v: string) => {
      str = v;
    },
  ];
}

const [str1getter, str1setter] = simpleStringState("hello");
const [str2getter, str2setter] = simpleStringState("hello2");
console.log(str1getter());
console.log(str2getter());
str1setter("goodbye");
str2setter("goodbye2");
console.log(str1getter());
console.log(str2getter());
