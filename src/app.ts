let x = 'y'; // string and not litral value Y
const b = 'john'; // TS มันมองว่าเป็น const ไม่เปลี่ยนค่าอยู่แล้วมันเลยให้เป็น literal type
let y = 78; //มันยังสามารถเป็น 60 20 10 ได้อยู่ in the future มันเลยให้เป็น number
var c = false;
let d = null;
const z = {
  x: 14,
};

enum Roles {
  admin = 'admin',
  author = 'author',
}

const user = Roles.admin;
