type Combinable = number | string;
type ConversionDesscriptor = "asNumber" | "asText";

function combine(
  input1: Combinable| boolean,
  input2: Combinable,
  resultConversion: ConversionDesscriptor,
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "asNumber"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
//   if (resultConversion === "asNumber") {
//     return +result;
//   } else {
//     return result.toString();
//   }
  return result;
}

const combineAges = combine(30, 26, "asNumber");
console.log(combineAges);

const combineStringAges = combine("30", "26", "asNumber");
console.log(combineAges);

const combineNames = combine("max", "anna", "asText");
console.log(combineNames);
