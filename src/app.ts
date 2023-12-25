// const promise: Promise<number> = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(1);
//   }, 1000);
// });

// type AwaitedType = Awaited<typeof promise>;

//? คิดซะว่าเป็น เป็น function ที่มันรับ generic type แล้วใช้สำหรับ obtain the return of type of a promise
// ? มัน unwrap type ที่อยู่ใน promise แล้ว return the underlying type

const promise: Promise<string> = new Promise((res, rej) => {
  setTimeout(() => {
    // res(2)
    res('Resolve')
  }, 1000);
})

//รู้ว่า ตัวนี้จะ return promise ซึ่ง will always resolve to string -> เราสามารถใช้ awaited type utility to create a type ที่จะ return the type of this particular promise

type AwaitedType = Awaited<typeof promise> //Awaited type is finally gonna be string
// !มีประโยชน์ เช่น เวลาเรา fetch ข้อมูลจาก api เราไม่รู้ว่าจะเป็น type อะไรกลับมา ตัว Utility Awaited จึงมีประโยชน์