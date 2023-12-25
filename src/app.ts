//* Utility type คือ predefined generic type -> เราสามารถ perform different types of transformation in TS -> Type พวกนี้มันเอาไว้ manipulate และก็ create new types

//! Utility types can be considered as type function that take one or more types as an input and produce a new type as an output


// Mapped Types -> ช่วยให้เรา create a new type based on existing type ด้วยการ apply mapping function to each property of the original type
// Partial Type Implementation
type Partial<T> = {
  [P in keyof T]?: T[P];
};
// Conditional Types
// Exclude Type Implementation
type Exclude<T, U> = T extends U ? never : T;
