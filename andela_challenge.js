//Question 5

const capitalizeWords = (s) => {
  let res = "";
  let capNext = true;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (/\s/.test(char)) {
      res += char;
      capNext = true;
    } else {
      if (capNext) {
        res += char.toUpperCase();
      } else {
        res += char;
      }

      capNext = false;
    }
  }
  return res;
};

//question 4

const balanced = (string) => {
  const charCount = {};
  for (const character of string) {
    charCount[character] = (charCount[character] || 0) + 1;
  }
  const counts = Object.values(charCount);

  return counts.every((count) => count === counts[0]);
};

// const balanced = (string) => {
//   const charCount = {};
//   for (let i = 0; i < string.length; i++) {
//     const character = string[i];
//     charCount[character] = (charCount[character] || 0) + 1;
//   }
//   const counts = Object.values(charCount);

//   let firstCount = counts[0];
//   for (let i = 1; i < counts.length; i++) {
//     if (counts[i] !== firstCount) {
//       return false;
//     }
//   }
//   return true;
// };

function weatherInfo(temp) {
  var c = convertToCelsius(temp);
  if (c > 0) {
    return c + " is above freezing temperature";
  } else {
    return c + " is freezing temperature";
  }
}

function convertToCelsius(temperature) {
  var celsius = (temperature - 32) * (5 / 9);
  return celsius;
}

//question 2
function multi(arr) {
  return arr.reduce((first, second) => first * second, 1);
}
function add(arr) {
  return arr.reduce((first, second) => first + second, 0);
}
function reverse(str) {
  return str.split("").reverse().join("");
}




const arr = arr