const user = {
  name: "John",
  age: 30,
};

let tom: typeof user;

function printStrings(strs: string | string[] | null) {
  if (!strs) {
    return "Please pass in valid string or arrays of strings";
  }
  if (typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else {
    console.log(strs);
  }
}
