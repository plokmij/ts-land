const logNumber: (i: number) =>void = (i: number) => {
  console.log(i);
};


const addNumbers: (a: number, b: number) => number = (a: number, b: number) => {
  return a+b;
}

logNumber(addNumbers(10,15));