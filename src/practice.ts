const sayHi = (name: string, age: number, gneder: string): string => {
  return `hello ${name} you are ${age}, ${gender}`;
};

console.log(sayHi("lee", 18, "male"));

//-----------------------------------------------

const person1 = {
  name: "lee",
  age: 20,
  gender: "male",
};
type Person = {
  name: string;
  age: number;
  gender: string;
};

const sayHello = (person: Person): Person => {
  return { name: person.name, age: person.age, gender: person.gender };

  console.log(sayHello(person1));
};

//------------------------------------------------------------
//interface 대신에 이렇게 class 로
class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
const lynn = new Human("lyn", 29, "female");

//------------------------
interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "lee",
  gender: "male",
  age: "22",
};

const sayHi = (person: Human): string => {
  return `hello ${person.name} you are ${person.age}, ${person.gender}`;
};

export {};
