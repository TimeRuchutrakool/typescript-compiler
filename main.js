// method -> object
// function -> window, global

const book = {
  title: "The Title",
  authors: ["John", "Mark", "Rob"],
  read() {
    console.log(this);
  },

  printAuthors() {
    this.authors.forEach(function (author) {
      console.log(this.title, " - ", author); //! this keyword ตรงนี้อยู่ใน scope ของ function ใน foreach ซึ่ง this มันเลย refer ไปถึง global scope
    }, this); //parameter ตัวที่ 2 มันจะเป็นตัวที่ this ใน arg แรก(function) refer ถึง ทีนี้มันก็จะ refer ถึง book แล้ว (ช่วย bind value of this keyword)
  },
  printAuthorsArrow() {
    this.authors.forEach((author) => {
      console.log(this.title, " - ", author); //! arrow function มันจะ เอา this ของ parent scope parent ของ functin นี้คือ object book มันเลยไม่ต้อง bind
    });
  },
};

book.printAuthors();
