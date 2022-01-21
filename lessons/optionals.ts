function printIngredient(quantity: string, ingredient: string, extra?: string) {
  console.log(`${quantity} ${ingredient} ${extra ? `${extra}` : ""}`);
}
printIngredient("1C", "Flour");
printIngredient("1C", "Sugar", "something else");

/* ================================ */

interface User {
  name: string;
  info?: {
    email?: string;
  };
}

function getEmail(user: User): string {
  if (user.info) {
    return user.info.email!; //the exclamation mark coerce TS
  }
  return "";
}

function getEmailEasy(user: User): string {
  return user?.info?.email ?? "";
}

/* ================================ */

function addWithCallback(x: number, y: number, callback?: () => void) {
  console.log([x, y]);
  callback?.();
}
