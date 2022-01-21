interface Coordinate {
  x: number;
  y: number;
}

const parseCoordinateFromObject = (obj: Coordinate): Coordinate => {
  return {
    ...obj,
  };
};

const parseCoordinateFromNumbers = (x: number, y: number): Coordinate => {
  return {
    x,
    y,
  };
};

/* how can we make a single function supporting multiple types of inputs */
/* unknown (a safe any type) you need to cast it before using it */
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(str: string): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
/* this is the generic function that has the overload logic */
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };

  //this type check is done at runtime and not at compiletime -> it's an object
  if (typeof arg1 === "object") {
    coord = {
      ...(arg1 as Coordinate),
    };
  } else if (typeof arg1 === "string") {
    (arg1 as string).split(",").forEach((str) => {
      const [key, value] = str.split(":");
      coord[key as "x" | "y"] = parseInt(value, 10);
    });
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    };
  }

  return coord;
}

console.log(parseCoordinate({ x: 52, y: 48 }));
console.log(parseCoordinate(2, 5));
console.log(parseCoordinate("x:52,y:48"));
