import { HashMap } from './hash.js';





describe('hash', () => {
    test('returns a number between 0 and 15', () => {
        const map = new HashMap();
        expect(map.hash('name')).toBeGreaterThanOrEqual(0);
        expect(map.hash('name')).toBeLessThan(16);
    });

    test('returns same index as key', () => {
        const map = new HashMap();
        expect(map.hash('name')).toBe(map.hash('name'));
    });
});

describe('hashmap set and get', () => {
    let map;

    beforeEach(() => {
        map = new HashMap();
    });

    test('sets and gets value', () => {
        map.set('name', 'jeremy');
        expect(map.get('name')).toBe('jeremy');
    });

    test('overwrites value over existing key', () => {
        map.set('name', 'Jeremy');
        map.set('name', 'John');
        expect(map.get('name')).toBe('John');
    });
    test('returns null for no key', () => {
        expect(map.get('ghost')).toBeNull();
    });
    test('returns null for a falsy key', () => {
        expect(map.get('')).toBeNull();
        expect(map.get(null)).toBeNull();
    });
    test('multiple keys no overwrite', () => {
        map.set('name', 'Jeremy');
        map.set('city', 'York');
        expect(map.get('name')).toBe('Jeremy');
        expect(map.get('city')).toBe('York');
    });
});
    
describe('Hashmap getLoad', () => {
    let map;

    beforeEach(() => {
        map = new HashMap();
    });
    
    test('returns 0 when empty', () => {
        expect(map.getLoad()).toBe(0);
    });
    test('increases as entries are added', () => {
        map.set('a', 1);
        map.set('b', 2);
        expect(map.getLoad()).toBe(2 / 16);
    });
    test('does not increase when overwriting a key', () => {
        map.set('name', 'Jeremy');
        map.set('name', 'John');
        expect(map.getLoad()).toBe(1 / 16);
    });
});

describe('has', () => {
    beforeEach(() => {
        map = new HashMap();
    });
    test('returns true when key exists', () => {
        map.set('name', 'Jeremy');
        expect(map.has('name')).toBe(true);
    });
    test('returns false when key does not exist', () => {
        expect(map.has('ghost')).toBe(false);
    });
    test('returns false for falsy key', () => {
        expect(map.has('')).toBe(false);
        expect(map.has(null)).toBe(false);
    });
});


describe('remove', () => {
    beforeEach(() => {
        map = new HashMap();
    });
    test('removes element by provided key', () => {
        map.set('name', 'Jeremy');
        map.remove('name');
        expect(map.get('name')).toBeNull();
    });
    test('returns true when key is removed', () => {
        map.set('name', 'Jeremy');
        expect(map.remove('name')).toBe(true);
    });
    test('returns false when key does not exist', () => {
        expect(map.remove('ghost')).toBe(false);
    });
});

describe('length of hash map', () => {
    beforeEach(() => {
        map = new HashMap();
    });
    test('returns length of hash map', () => {
        map.set('name', 'Jeremy');
        map.set('surname', 'Win');
        expect(map.length()).toEqual(2);
    });
});

describe('clear hash map', () => {
    beforeEach(() => {
        map = new HashMap();
    });
    test('clears elements in hash map', () => {
        map.set('name', 'Jeremy');
        map.set('surname', 'Win');
        map.clear();
        expect(map.length()).toBe(0);
    });
});

describe('keys', () => {
    beforeEach(() => {
        map = new HashMap();
    });
    test('returns all keys in hash map', () => {
        map.set('name', 'Jeremy');
        map.set('city', 'York');
        expect(map.keys()).toEqual(['name', 'city']);
    });
});