

export class HashMap {
    constructor(loadfactor, capacity, buckets) {
    this.loadfactor = 0.75;
    this.capacity = 16;
    this.buckets = new Array(this.capacity);
    }

    set(key, value) {

        const index = hash(key);
        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }
        let entryCount = 0;
        for (let i = 0; i < this.buckets[index].length; i ++) {
            if (this.buckets[index][i][0] === key) {
                this.buckets[index][i][1] = value;
                return;
            }

        }
        this.buckets[index].push([key, value]);
    }

    getLoad() {
        let entryCount = 0;
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i]) {
                entryCount += this.buckets[i].length;
            }
        }
        return entryCount / this.capacity;
    }
}


export function hash(key) {



    let hashCode = 0;



    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return (hashCode % 16);

    if  (index < 0 || index >= buckets.length) {
        throw new Error("Trying to access index out of bounds");
    }

}