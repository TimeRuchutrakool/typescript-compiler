function person(name: string, age: number) {
  return {
    name: name,
    age: age,
  };
}

type GetFirstArgumentOfAnyFucntion<T> = T extends (
  first: infer FirstArgument,
  ...args: any[]
) => any
  ? FirstArgument
  : never;

type GetSecondArgumentOfAnyFucntion<T> = T extends (
  first: any,
  second: infer SecondArgument,
  ...args: any[]
) => any
  ? SecondArgument
  : never;

type FirstArgument = GetFirstArgumentOfAnyFucntion<typeof person>;
type SecondArgument = GetSecondArgumentOfAnyFucntion<typeof person>;


// statisfied operator -> จะ prevalidate all the properties of the object for us

type Properties = 'red' | 'green' | 'blue'
type RGB = [red: number, green: number, blue: number]

const color = {
  red: [255, 0, 0],
  green: '#00f00',
  blue: [255, 255, 0]
} satisfies Record<Properties,RGB|string> //satisfies operator จะ validate the red green blue values for us and check in advance ว่า those properties contains a string or an array of RGB


color.blue.toLowerCase()
color.green.toLowerCase()