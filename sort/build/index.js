"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const collection = new NumbersCollection_1.NumbersCollection([10, -3, -3, 0, 5]);
collection.sort();
console.log(collection);
const ll = new LinkedList_1.LinkedList();
ll.add(10);
ll.add(-3);
ll.add(20);
ll.add(15);
ll.sort();
ll.print();
const charsCollection = new CharactersCollection_1.CharactersCollection('samFan');
charsCollection.sort();
console.log(charsCollection.data);
