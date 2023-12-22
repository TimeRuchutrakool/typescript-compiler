const numbers = {
  x: 10,
  y: {
    z: 20,
  },
} as const;

const numbers2 = <const>{
  x: 10,
  y: {
    z: 20,
  },
}

let firstNameField = document.querySelector(
  '#firstName'
)! as HTMLInputElement;

firstNameField.value;
