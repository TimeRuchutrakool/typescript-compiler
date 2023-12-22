type answer_1 = number extends 56 ? true : false; //false
type answer_2 = 76 extends number ? true : false; // true
type answer_3 = string[] extends any ? true : false; //true
type answer_4 = string[] extends any[] ? true : false; //true
type answer_5 = unknown extends any ? true : false; //true
type answer_6 = any extends any ? true : false; //true
type answer_7 = Date extends { new (...args: any[]): any } ? true : false; //false //Date เป็น interface มันไม่สามารถ extends contructor ได้
type answer_8 = typeof Date extends { new (...args: any[]): any } //Date constructor extends any kind of constructor รึเปล่า // true
  ? true
  : false;
