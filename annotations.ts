const logNumber: (i: number) =>void = (i: number) => {
  console.log(i);
};


const addNumbers: (a: number, b: number) => number = (a: number, b: number) => {
  return a+b;
}

logNumber(addNumbers(10,15));




const json = '{"x":10,"y":20}';
const coords: {x: number; y: number} = JSON.parse(json);
console.log(coords.y);