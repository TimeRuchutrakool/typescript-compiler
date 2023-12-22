// type ArrayElementType<T> = T extends [] ? true : false;
// infer keyword สามารถใช้งานได้เฉพาะกับ conditional type เท่านั้น
type ArrayElementType<T> = T extends (infer E)[] ? E[] : T; //does T extends an array of generic type E //!เรา instruct TS to infer the type of array for us //  reads generic ที่ pass เข้ามา to ArrayElementType -> Does it extend a type of an array //แล้วถ้ามัน extend the type of an array -> please go ahead and infer the type of array it is และ create a generic E // ถ้ามันเป็น string array ก็ให้ช่ย create array of string(E) // ถ้าเป็น number please infer E as number 
// ?ถ้ามันไม่ใช่ array ก็ return type T อย่างที่มัน ใส่เข้ามา เป็น number ก็ type number

type TypeOne = ArrayElementType<string[]>; //E
// string

type TypeTwo = ArrayElementType<number[]>; //E
// number

type TypeThree = ArrayElementType<(number | string | boolean)[]>; //E
// string | number| boolean

type TypeFour = ArrayElementType<{ name: string }>; //T
// { name: string }

type TypeFive = ArrayElementType<string>;
// string
