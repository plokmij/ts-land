import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const collection = new NumbersCollection([10,-3,-3,0,5]);
collection.sort();
console.log(collection);

const ll = new LinkedList();
ll.add(10);
ll.add(-3);
ll.add(20);
ll.add(15);
ll.sort();
ll.print();

const charsCollection = new CharactersCollection('samFan');
charsCollection.sort();
console.log(charsCollection.data);