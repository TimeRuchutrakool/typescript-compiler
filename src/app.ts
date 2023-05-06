// Uppercase<StringType>
// Lowercase<StringType>
// Capitalize<StringType>
// Uncapitalize<StringType>

type City = "New York" | "London" | "tokyo";
type UppercaseCity = Uppercase<City>;
type LowercaseCity = Lowercase<City>;
type CapitalizeCity = Capitalize<City>;
type UncapitalizeCity = Uncapitalize<City>;
