// Interview Question - create a no sql style in memory database

interface Database {
  get(id: string): string;
  set(id: string, value: string): void;
}

interface Persistable {
  saveToString(): string;
  restoreFromString(storedState: string): void;
}

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
 */

class InMemoryDatabase implements Database {
  protected db: Record<string, string> = {}; //public / private / protected
  get(id: string): string {
    return this.db[id];
  }
  set(id: string, value: string): void {
    this.db[id] = value;
  }
}

class PersistentInMemoryDatabase
  extends InMemoryDatabase
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
