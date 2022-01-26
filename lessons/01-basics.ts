let userName: string = "Giorgio";
let hasLoggedIn: boolean = true;

userName += " Torre";

console.log(userName);

/* there are various different types */
let myNum: number = 10;
let myRegex: RegExp = /foo/;
const names: string[] = userName.split(" ");
const values: Array<number> = [1, 2, 3];

/* create interface to standardise syntax of an object */
interface Person {
  first: string;
  last: string;
}

const me: Person = {
  first: "Giorgio",
  last: "Torre",
};

/* use objects as maps - create a map of ids
 * Record definition:
 * "Constructs an object type whose property keys are Keys and whose property values are Type.
 * This utility can be used to map the properties of a type to another type." — TypeScript’s documentation
 */

const ids: Record<number, string> = {
  10: "a",
  20: "b",
};

ids[30] = "c";

/* I can achieve the same as Record above with "index signature" */
const ids2: { [order: number]: string } = {
  10: "a",
  20: "b",
};
