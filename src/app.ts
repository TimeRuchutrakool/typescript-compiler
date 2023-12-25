// ! ช่วยให้เรา create a new type by picking some of the subsets or properties of an existing type

//  Pick<Type, Keys>; //ตัวแรกเป็น original type หรือ properties of that particular type //ส่วน keys is an array of props ที่เรา want to pick up from the original type

interface Person {
  name: string;
  age: number;
  address: string;
}

type NameAndAge = Pick<Person, "name" | "age">; //pick name and age and ignore address prop
type ReadonlyNameAndAge =Readonly<Pick<Person, "name" | "age">>

const person: NameAndAge = {
  name: "John",
  age: 32,
};

person.name = "Else";
