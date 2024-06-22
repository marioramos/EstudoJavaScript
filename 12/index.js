let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// let boxA;
// boxA = varA;

// varA = varB;
// varB = varC
// varC = boxA;

[varA, varB, varC] = [varB, varC, varA]


console.log(varA, varB, varC)