function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial;
  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}

const [st1getter, st1setter] = simpleState(10);
console.log(st1getter());
st1setter(45);
console.log(st1getter());

/* override generic type defining the expected types <...> */
const [st2getter, st2setter] = simpleState<string | null>(null);
console.log(st2getter());
st2setter("str");
console.log(st2getter());

/* still on generics - you can make interfaces generics */
interface Rank<T> {
  item: T;
  rank: number;
}
function ranker<T>(items: T[], rank: (v: T) => number): T[] {
  const ranks: Rank<T>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map((rank) => rank.item);
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokemons: Pokemon[] = [
  {
    name: "Bulbasaur",
    hp: 20,
  },
  {
    name: "Charmender",
    hp: 22,
  },
  {
    name: "Squirtle",
    hp: 25,
  },
];

const ranks = ranker(pokemons, ({ hp }) => hp);
console.log(ranks);
