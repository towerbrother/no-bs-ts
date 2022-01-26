/* pluck - function that return an array from an object specifying a key */
function pluck<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

const dogs = [
  { name: "aqua", age: 7 },
  { name: "luna", age: 12 },
  { name: "sole", age: 4 },
  { name: "terra", age: 15 },
];

console.log(pluck(dogs, "age")); // [ 7, 12, 4, 15 ]
console.log(pluck(dogs, "name")); // [ 'aqua', 'luna', 'sole', 'terra' ]

/* ++++++++++++++++++++++++++++++++++++++++++++ */

// with this implementation is that you cannot mess up your code
// sendEvent is checked and intellisense supports the development

interface BaseEvent {
  time: number;
  user: string;
}
interface Event {
  addToCart: BaseEvent & { quantity: number; productID: string };
  checkout: BaseEvent;
}

function createEvent<Name extends keyof Event>(
  name: Name,
  data: Event[Name]
): void {
  console.log([name, data]);
}

createEvent("addToCart", {
  productID: "a",
  user: "primo",
  quantity: 1,
  time: 10,
});

createEvent("checkout", {
  user: "primo",
  time: 10,
});
