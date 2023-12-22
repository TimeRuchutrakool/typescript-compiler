interface MapLocation {
  lat: number;
  long: number;
}

// function AddLocationn(classConstructor: FunctionConstructor) {
//   return class extends classConstructor{
//     constructor(){super()}
//   }
// }//แปลงให้เป็น factory

//!  |
//!  |
//!  V

// function AddLocationnn(lat:number,lng:number) { 
//   return function(classConstructor: FunctionConstructor) {
//   return class extends classConstructor{
//     constructor(){super()}
//   }
// }
// }


//!  |
//!  |
//!  V

function AddLocation(lat: number, long: number) { //จุดประสงค์มันคือ class ไหนที่ถูก decorate ด้วย ตัวนี้จะมี property mapLocation เพิ่ม
  return <T extends { new (...args: any[]): {} }>( //new keyword จะบอก ว่ามันจะ return object //new (...args: any[]): {} คือ function ที่มี rest param args
    classConstructor: T
  ) => {
    return class extends classConstructor { //return class ที่มัน extends constructor ตัวที่ไปเกาะ
      public mapLocation: MapLocation;
      constructor(...args: any[]) {
        super(...args);
        this.mapLocation = { lat, long };
      }
    };
  };
}

// class decorator มัน สามารถ alter a constructor function และ return a new constructor function จากใน decorator มันเองได้
@AddLocation(1.234, 1.876)
class Person {
  constructor(public name: string, public age: number) {}
}

const person: Person = new Person('John', 32);
console.log(person);
