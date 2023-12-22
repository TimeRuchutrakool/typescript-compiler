function returnString() {
  return 123;
}
//ถ้าเราต้องการจะ infer the type of this function ซึ่งแบบบางทีเป็น functionจาก lib -> เพื่อที่จะ counter ได้แบบตอนที่ lib changed
type FunctionReturnType<T> = T extends () => infer R ? R : T; //ถ้า T เป็น fucntion ที่ return อะไรซักอย่าง ก็จะ infer R แล้ว ได้เป็น R แต่ถ้าไม่ใช่ ก็จะได้ T ตัวเดิม
const type = typeof returnString
type NewType = FunctionReturnType<typeof returnString>;
