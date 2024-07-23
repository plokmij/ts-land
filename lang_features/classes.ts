class Vehicle {
  constructor(public color: string) {}

  drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('bonk bonk');
  }

  //private to this class and child classes
  protected gearShift(): void {
    console.log('gear shift success');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  //by default all methods are `public`
  drive(): void {
    this.startDriving();
  }

  //private access only in the same
  private startDriving(): void {
    this.gearShift();
    console.log('vrooom');
  }
}

const car = new Car(2, 'red');
console.log(car.color);
car.drive();
car.honk();
