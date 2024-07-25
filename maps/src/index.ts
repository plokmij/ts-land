import { User } from './User';
// import {Company} from './Company';
import { CustomMap } from './CustomMap';

// const user = new User();
// const company = new Company();

// console.log(user);
// console.log(company);

const user = new User();
const customMap = new CustomMap('map');


setTimeout(() => {
  customMap.addUserMarker(user);
}, 1000);
