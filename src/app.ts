interface Animal {
  live: () => void;
}

interface Dog extends Animal {
  woof: () => void;
}

// ? เราสามารถ check ว่า typeนึงมัน extends the other type แล้วก็ perform actions based on the condition ที่เป็น true
type Example = Dog extends Animal ? string : number; //ถ้า dog มัน extends animal Example จะเป็น string

// SomeType extends OtherType ? TrueType : FalseType;
type isString<T> = T extends string ? true : false;

type A = isString<string>;
type B = isString<number>;
