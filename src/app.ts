// Readonly<Type>
interface User {
  name: string;
  age: number;
}

const user: Readonly<User> = {
  name: "John",
  age: 32,
};

user.name = "Something Else";
