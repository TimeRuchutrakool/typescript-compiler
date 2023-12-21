/*
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.points = 0;
  }

  login() {
    console.log(this.name, 'Has logged in');
  }

  logout() {
    console.log(this.name, 'Has logged out');
  }

  addPoint() {
    this.points++;
    console.log('total points', this.points);
  }
}

const user = new User('John', 'john@email.com');

console.log(user);
*/

function User(name, email) {
  this.name = name;
  this.email = email;
  this.points = 0;

  this.login = () => {
    console.log(this.name, "Has logged in");
  };

  this.logout = () => {
    console.log(this.name, "Has logged out");
  };

  this.addPoint = () => {
    this.points++;
    console.log("total points", this.points);
  };
}

// ! เมื่อใช้ new keyword JS มันจะ treat this function as a constructor function
// หลังจากนั้นสิ่งที่มันทำคือ create empty obj //this ของ function จะ refer ไปหา {} ที่สร้างขึ้นตะกี้ แล้ว add all properties 1 by 1
const user = new User("John", "john@email.com");

console.log(user);
