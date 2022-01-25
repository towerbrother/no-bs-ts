type MyFlexDogInfo = {
  name: string;
  [key: string]: string | number;
};

const dog: MyFlexDogInfo = {
  name: "LG",
  breed: "Mutt",
  age: 22,
};

/* ++++++++++++++++++++++++++++++++ */

interface CatInfo {
  name: string;
  age: number;
}

type OptionsFlags<T> = {
  [Property in keyof T]: boolean;
};

type CatInfoOptions = OptionsFlags<CatInfo>;

/* ++++++++++++++++++++++++++++++++++ */
//Practical example

type Listeners<T> = {
  [Property in keyof T as `on${Capitalize<string & Property>}Change`]?: (
    newValue: T[Property]
  ) => void;
} & {
  [Property in keyof T as `on${Capitalize<string & Property>}Delete`]?: (
    newValue: T[Property]
  ) => void;
};

function listenToObject<T>(obj: T, listeners: Listeners<T>): void {
  throw "Needs implementing";
}

const miao: CatInfo = { name: "Miao", age: 7 };

type CatInfoListeners = Listeners<CatInfo>;

listenToObject(miao, {
  onNameChange: (v: string) => {},
  onAgeChange: (v: number) => {},
  onNameDelete: (v: string) => {},
});
