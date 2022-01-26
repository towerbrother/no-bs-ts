// Interview Question - create a no sql style in memory database

/*
 * You can use an implements clause to check that a class satisfies a particular interface.
 * An error will be issued if a class fails to correctly implement it.
 *
 * Classes may extend from a base class. A derived class has all the properties
 * and methods of its base class, and also define additional members.
 *
 * Members visibility
 * - Public: the default value. A public member can be accessed anywhere.
 *  * - Protected: members are only visible to subclasses of the class they’re declared in.
 * - Private: is like protected, but doesn’t allow access to the member even from subclasses.
 *
 * Generics
 * Generics can be extended to implementation of classes.
 */

interface Database<K, T> {
  get(id: K): T;
  set(id: K, value: T): void;
}

interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

type DbKeyType = number | string | symbol;

class InMemoryDatabase<K extends DbKeyType, T> implements Database<K, T> {
  protected db: Record<K, T> = {} as Record<K, T>;
  get(id: K): T {
    return this.db[id];
  }
  set(id: K, value: T): void {
    this.db[id] = value;
  }
}

class PersistentInMemoryDatabase<K extends DbKeyType, T>
  extends InMemoryDatabase<K, T>
  implements Persistable
{
  saveToString(): string {
    return JSON.stringify(this.db);
  }
  restoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

const myDb = new PersistentInMemoryDatabase();
myDb.set("id", "foo");
console.log(myDb.get("id"));
const saved = myDb.saveToString();
console.log(saved);
const myDb2 = new PersistentInMemoryDatabase();
myDb2.restoreFromString(saved);
console.log(myDb2.get("id"));

const myDb3 = new PersistentInMemoryDatabase<string, object>();
myDb3.set("generic", { 1: "hi", 2: "hola", 3: "hallo" });
const saved3 = myDb3.saveToString();
console.log(saved3);
