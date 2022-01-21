let userName: string = "Giorgio";
let hasLoggedIn: boolean = true;

userName += " Torre";

console.log(userName);

/* there are various different types */
let myNum: number = 10;
let myRegex: RegExp = /foo/;
const names: string[] = userName.split(" ");
const values: Array<number> = [1, 2, 3];

/* create interface to standardise a new type (for objects) */
interface Person {
  first: string;
  last: string;
}

const me: Person = {
  first: "Giorgio",
  last: "Torre",
};

/* use objects as maps - create a map of ids */
const ids: Record<number, string> = {
  10: "a",
  20: "b",
};

ids[30] = "c";
