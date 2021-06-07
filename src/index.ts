export default () => {
  let a: number = 5555;
  console.log(a);
  interface A {
    canSay: Boolean;
    say(): string;
  }

  interface B {
    canSay: Boolean;
    canSing: Boolean;
    sing(): string;
  }

  class People {
    constructor(person: A | B) {
      if (person.canSay) {
        let a = (person as A).say();
        let b: HTMLElement = document.getElementById("app") as HTMLElement;
      }
    }
  }

  enum Status {
    sing,
    dance,
    rap,
    basketBall,
  }

  function getHobbies(status: number | string) {
    switch (status) {
      case Status.sing:
        return "sing";
        break;
      case Status.dance:
        return "dance";
        break;
      case Status.rap:
        return "rap";
        break;
      case Status.basketBall:
        return "basketBall";
        break;
      default:
        break;
    }
  }

  console.log(`I like ${getHobbies(Status.dance)}`);
  console.log(Status);

  enum Net {
    OK = 200,
    FRONTFAIL = 400,
    INTERVALFAIL = 500,
  }
  let arr: number[] = [200, 400, 500];

  function getNet(): number {
    return arr[Math.floor(Math.random() * 3)];
  }
  console.log(`网络状况${Net[getNet()]}`);

  function fn<T, P>(a: T, b: P) {
    return `${a}${b}`;
  }
  let z = fn<string, number>("23333", 3);
  console.log(z);
  // 泛型继承

  interface People {
    name?: string;
    age?: number;
  }
  class SelectPerson<T extends People> {
    constructor(private people: T[]) {}
    selsect(index: number): number | string | undefined {
      if (typeof index === "number") {
        if (index > this.people.length - 1) {
          return "你彷佛在放屁";
        }
        return this.people[index].age;
      } else if (typeof index === "string") {
        return index;
      }
    }
  }
  let selsectPerson = new SelectPerson([
    { name: "dog", age: 18 },
    { name: "cat", age: 30 },
    { name: "duck", age: 45 },
  ]);
  console.log(selsectPerson.selsect(0));
};
