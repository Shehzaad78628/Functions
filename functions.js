function firstLetterName(name) {
  if (name.length === 0) {
    alert("Please provide a valid name.");
    return;
  }

  const firstLetter = name[0].toUpperCase(); // Using bracket syntax to get the first letter
  alert(`The name ${name} starts with the letter ${firstLetter}`);
}

function divisibleByTwo(number) {
  return number % 2 === 0;
}

function largestNum(arr) {
  if (arr.length === 0) {
    return undefined; 
  }

  let maxNumber = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
      maxNumber = arr[i];
    }
  }

  return maxNumber;
}

// Call firstLetterName with the name "Shehzaad"
firstLetterName("Shehzaad");

// Call divisibleByTwo
const numberToCheck = 15;
const isDivisible = divisibleByTwo(numberToCheck);
console.log(`${numberToCheck} is divisible by two: ${isDivisible}`);

// Call largestNum
const numbersArray = [23, 56, 12, 89, 34, 67];
const maxNumber = largestNum(numbersArray);
console.log(`The largest number in the array is: ${maxNumber}`);

  