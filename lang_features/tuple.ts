const drink = {
  color: 'brown',
  carbonate: true,
  sugar: 40,
};

type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 400];