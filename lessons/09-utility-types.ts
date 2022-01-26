interface MyUser {
  id: string;
  name: string;
  email?: string;
  phone?: number;
}

// these are utility types - they allow to add functionalities without code duplication
type MyUserOptionals = Partial<MyUser>;
type MyUserRequired = Required<MyUser>;
type MyUserJustEmailAndName = Pick<MyUser, "email" | "name">;
type MyUserWithoutId = Omit<MyUser, "id">;

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    { name: "jack", id: "1", email: "dontemail@mail.com" },
    { email: "email@mail.com" }
  )
);

//create a map with utility type Record to get a user by its id
const mapById = (users: MyUser[]): Record<MyUser["id"], MyUserWithoutId> => {
  return users.reduce((a, v) => {
    const { id, ...other } = v;
    return {
      ...a,
      [id]: other,
    };
  }, {});
};

console.log(
  mapById([
    { id: "foo", name: "Mr. Foo" },
    { id: "baz", name: "Mrs. Baz" },
  ])
);
