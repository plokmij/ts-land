const profile = {
  name: 'samfan',
  age: 28,
  coords: {
    lat: 0,
    lng: 15,
  },

  setAge(age: number): void {
    this.age = age;
  },
};

const { age, name }: { age: number; name: string } = profile;
console.log(age);

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

console.log(lat);
console.log(lng);
