// จะช่วยให้ prop ของ original type required ทั้งหมด

// Required<Type>;

interface User {
  name?: string;
  age?: number;
  email?: string;
  password?: string;
}

type RegisterUser = Required<Pick<User, "email" | "password">>;

const a: RegisterUser = {
  email: '',
  password:''
}