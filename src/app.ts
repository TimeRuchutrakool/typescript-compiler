// จะเป็นเหมือนตรงข้ามกับ pick utility tyoe

// Omit<OldType, Keys>;

interface User {
  name: string;
  age: number;
  email: string;
  password: string;
}

type LimitedUser = Omit<User, "password" | "age">; //จะไม่ contain password และ age
