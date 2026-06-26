

export class HashMap {
    constructor() {
    this.loadfactor = 0.75;
    this.capacity = 16;
    this.buckets = new Array(this.capacity);
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return (hashCode % 16);
    }

    set(key, value) {
        const index = this.hash(key);
        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }
        for (let i = 0; i < this.buckets[index].length; i ++) {
            if (this.buckets[index][i][0] === key) {
                this.buckets[index][i][1] = value;
                return;
            }
        }
        this.buckets[index].push([key, value]);
    }

    get(key) {
        if (!key) return null;
        const index = this.hash(key);

        if  (index < 0 || index >= this.buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        const bucket = this.buckets[index];
        if (!bucket) return null;

        const entry = bucket.find(([k]) => k === key);
        return entry ? entry[1] : null;
    }

    has(key) {
        if (!key) return false;
        const index = this.hash(key);
        const bucket = this.buckets[index];
        if (!bucket) return false;
        return bucket.some(([k]) => k === key);
    }

    remove(key) {
        if (!key) return false;
        const index = this.hash(key);
        const bucket = this.buckets[index];
        if (!bucket) return false;

        const entryIndex = bucket.findIndex(([k]) => k === key);
        if (entryIndex === -1) return false;

        bucket.splice(entryIndex, 1);
        return true;
    }

    length() {
        let entryCount = 0;
        
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i]) {
                entryCount += this.buckets[i].length;
            }
        }
        return entryCount;
    }

    clear() {
        this.buckets = new Array(this.capacity);
    }

    keys() {
        const keys = [];
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i]) {
                for (const [k] of this.buckets[i]) {
                    keys.push(k);
                }
            }
        }
        return keys;
    }

    values() {
        const values = [];
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i]) {
                for (const [k, v] of this.buckets[i]) {
                    values.push(v)
                }
            }
        }
        return values;
    }

    entries() {
        const keyValuePair = [];
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i]) {
                for (const [k, v] of this.buckets[i]) {
                    keyValuePair.push([k, v])
                }
            }
        }
        return keyValuePair;
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

