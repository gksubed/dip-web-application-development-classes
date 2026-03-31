const numbers = [1, 2, 3, 4, 5];

// Copy the numbers array
const numbersCopy = numbers.map((number) => number);
console.log(numbersCopy);

// Function to multiply numbers in array
function multiplyNumbers(numbers) {
  return numbers.map((number) => number * 2);
}
console.log(multiplyNumbers(numbersCopy));

multiplyNumbers2 = (numbers) => {
  numbers.map((number) => number * 2);
};
console.log(multiplyNumbers2(numbersCopy));
