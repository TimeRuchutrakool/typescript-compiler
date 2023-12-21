const book = new Object();

// obj ที่ต้องการ define // property ที่ต้องการ define แล้วก็ obj
Object.defineProperty(book, 'title', {
  value: 'This is the title of the book',
  writeable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(book, 'author', {
  value: 'John',
  writeable: false,
  enumerable: true,
  configurable: true,
});

book.author = 'Mark';

console.log(book);
