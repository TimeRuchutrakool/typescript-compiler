// !จะใช้สำหรับ combine two different types together into one -> มัน allow you to create an object type whose property are of a specific type 
// ก็คือ รับ 2 different type and converting one of the type to object keys and the another type t object value

// Record<Keys, Type>

type Roles = "author" | "editor" | "researcher";

interface User {
  name: string;
  email: string;
  age: number;
}

interface Article {
  title: string;
  content: string;
  // contrbutors คือ derivation ของ Roles กับ User
  contributors: Record<Roles, User>; //! มัน take each value of Roles เป็น key แล้ว assign value เป็น interface User
}

const article: Article = {
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  content: "Duis est urna, eleifend at malesuada id, suscipit eu",
  // Contributors can be type generated from Roles type and User interface
  contributors: {
    author: { name: "John", email: "john@email.com", age: 32 },
    editor: { name: "Frank", email: "frank@email.com", age: 36 },
    researcher: { name: "Mark", email: "mark@email.com", age: 36 },
  },
};
