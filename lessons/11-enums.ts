const preload = "preload";
const loading = "loading";
const loaded = "loaded";

// the above constants are related and should stay together
enum LoadingState {
  preload = "preload",
  loading = "loading",
  loaded = "loaded",
}

//this implementation allows adding stupid parameters
// const isLoading = (state: string) => state === "loading";
// console.log(isLoading("dog"));

const isLoading = (state: LoadingState) => state === LoadingState.loading;
console.log(isLoading(LoadingState.loaded));

/* +++++++++++++++++++++++++ */

// Literal types - to control functions parameters

function rollDice(dice: 1 | 2 | 3): number {
  let pip = 0;
  for (let i = 0; i < dice; i++) {
    pip += Math.floor(Math.random() * 5 + 1);
  }
  return pip;
}
// console.log(rollDice(4));

function sendEvent(name: "checkout", data: { cartCount: number }): void;
function sendEvent(name: "addToCart", data: { productId: number }): void;
function sendEvent(name: string, data: unknown): void {
  console.log(`${name}: ${JSON.stringify(data)}`);
}

sendEvent("addToCart", { productId: 3756789 });
sendEvent("checkout", { cartCount: 15 });
