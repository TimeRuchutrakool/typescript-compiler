// interface WritePermissions {
//   write: true;
// }

// interface ReadPermissions {
//   write: false;
// }

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// interface Admin extends User, WritePermissions {}
// interface Author extends User, WritePermissions {}
// interface Reader extends User, ReadPermissions {}

// type FilterWritable<T> = T extends { write: true } ? true : false;

// type Writable = FilterWritable<Reader>;

interface WritePermissions{
  write:true
}

interface ReadPermissions{
  write:false
}

interface User{
  id: number;
  name: string;
  email: string;
}

// เราจะเรียกใช้ filtered writable ซึ่งเราจะ pass in one of those interface to a parent interface as a generic แล้วปล่อยให้ interface decide ว่าเป็น admin user หรือ author

interface Admin extends User, WritePermissions{
  
}
interface Author extends User, WritePermissions{
  
}
interface Reader extends User, ReadPermissions{
  
}

type FilterWritable<T> = T extends { write: true } ? true : false

// type Writable = FilterWritable<Admin>
type Writable = FilterWritable<Reader>