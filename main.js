
// เป็นที่รู้กันว่า every property ใน obj มันจะมี object associated with it ซึ่งเรียกว่า property descriptor


// value -> The value of the property
// writable (boolean) -> whether this property in question is writable or not
// enumerable (boolean)  -> whether you can enumerate or loop through this property or not //? สามารถ loop throughได้มั้ย
// configurable (boolean) -> The configurable property tells whether the user has permission
//								           to change property descriptor such as to change the value of
//                           writable and enumerable settings. //?ถ้าเป็น true คือ property สามารถถูก change ได้

const book = { 
  title: 'the title',
  pages: 300,
  author: 'John',
};

console.log(Object.getOwnPropertyDescriptors(book));
