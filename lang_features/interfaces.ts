interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civice',
  year: 2000,
  broken: true,

  summary(): string {
    return `Name: ${this.name}`;
  },
};

const newDrink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,

  summary(): string {
    return `Sugar: ${this.sugar}`;
  },
};

const report = (item: Reportable): void => {
  console.log(item.summary());
};

report(oldCivic);
report(newDrink);