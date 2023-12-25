// ช่วยให้เรา create a new type based on an existing type ที่ pass เข้าไป แต่ prop ทั้งหมดจะถูก set เป็น optional

//  Partial<Type>;
interface User {
  name: string;
  email: string;
  password: string;
}

function updateUser(user: User, updates: Partial<User>): User {
  return { ...user, ...updates };
}

const user: User = {
  name: "John",
  email: "test@email.com",
  password: "password",
};

const updatedUser = updateUser(user, { email: "email@test.com",address:'' });
