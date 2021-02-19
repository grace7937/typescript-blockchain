const name = "lee",
  age = 24,
  gender = "m";

const sayHi = (name: string, age: number, gneder: string) => {
  console.log(`hello ${name} you are ${age}, ${gender}`);
};

const na = sayHi("lee", 10, "male");
console.log(na);
export {};
