import { User } from './User';
// import {Company} from './Company';
import { CustomMap } from './CustomMap';
import { Company } from './Company';

// const user = new User();
// const company = new Company();

// console.log(user);
// console.log(company);

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');


setTimeout(() => {
  customMap.addMarker(user);
  customMap.addMarker(company);  
}, 1000);
