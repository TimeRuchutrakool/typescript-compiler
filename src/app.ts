type Events = {
  id: number;
  date: Date;
  type: 'indoor' | 'outdoor';
};


type unionOfKeysOfEvents = keyof Events; // -> "id" | "date" | "type"

type Numeric = {
  [key: number]: string;
};

type NumericKeyOf = keyof Numeric;

type NumberAndString = {
  [key: string]: string;
};

type NumberAndStringKeyoff = keyof NumberAndString;
