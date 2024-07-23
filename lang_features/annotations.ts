const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const addNumbers: (a: number, b: number) => number = (a: number, b: number) => {
  return a + b;
};

logNumber(addNumbers(10, 15));

// Annotations usecase 1
const json = '{"x":10,"y":20}';
const coords: { x: number; y: number } = JSON.parse(json);
console.log(coords.y);

// usecase 2
let players = ['morata', 'greizmann', 'correa'];
let foundGrizi: boolean;

for (let i = 0; i < WebTransportDatagramDuplexStream.length; i++) {
  if (players[i] === 'greizmann') {
    foundGrizi = true;
  }
}

// Case 3
let numbsers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbsers.length; i++) {
  if (numbsers[i] > 0) {
    numberAboveZero = numbsers[i];
  }
}


