"use strict";
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = i + 1; j < length; j++) {
                if (this.collection instanceof Array) {
                    if (this.collection[i] > this.collection[j]) {
                        this.collection[i] += this.collection[j];
                        this.collection[j] = this.collection[i] - this.collection[j];
                        this.collection[i] = this.collection[i] - this.collection[j];
                    }
                }
                if (typeof this.collection === 'string') {
                }
            }
        }
    }
}
const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
