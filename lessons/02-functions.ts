export const addNumbers = (a: number, b: number): number => {
  return a + b;
};

export const addStrings = (str1: string, str2: string): string => {
  return `${str1} ${str2}`;
};

export const addDefaultStrings = (
  str1: string,
  str2: string = "tvb"
): string => {
  return `${str1} ${str2}`;
};

/* union type (|) - one parameter can be of different types */
export const format = (title: string, param: string | number): string => {
  return `${title} ${param}`;
};

export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
};

export const fetchdata = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

/* multiple arguments and coalesce them into an array */
export const introduce = (salutation: string, ...names: string[]): string => {
  return `${salutation} ${names.join(" ")}`;
};

/**
 * ! types are enforced at compile-time not run-time */
/**
 * ? with this implementation there is no type checking after compilation to JS */
// export const getName = (user: { first: string; last: string }): string => {
//   return `${user.first} ${user.last}`;
// };

/* better implementation */
export const getName = (user: { first: string; last: string }): string => {
  return `${user?.first ?? "first"} ${user?.last ?? "last"}`;
};
