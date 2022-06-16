//require in codify function
const codify = require('../codify');

//test input:
const testInput = 'Abercrombie, Neil, Male, Tan, 2/13/1943\nBishop, Timothy, Male, Yellow, 4/23/1967\nKelly, Sue, Female, Pink, 7/12/1959\nSmith | Steve | D | M | Red | 3-3-1985\nBonk | Radek | S | M | Green | 6-3-1975\nBouillon | Francis | G | M | Blue | 6-3-1975\nKournikova Anna F F 6-3-1975 Red\nHingis Martina M F 4-2-1979 Green\nSeles Monica H F 12-2-1973 Black\n'

describe('codify', () => {
    //should return an object
    it('returns an object', () => {
        expect(typeof codify(testInput)).toBe('object');
    });
    describe('the returned object', () => {
        //returned object should contain the keys 'females,' 'males,' and 'all' 
        it('contains the keys "females," "males," and "all"', () => {
            expect(codify(testInput).females).toBeTruthy();
            expect(codify(testInput).males).toBeTruthy();
            expect(codify(testInput).all).toBeTruthy();
        });
        //the value at each key should be an array
        it('has the keys "females," "males," and "all," whose values are arrays', () => {
            expect(Array.isArray(codify(testInput).females)).toBeTruthy();
            expect(Array.isArray(codify(testInput).males)).toBeTruthy();
            expect(Array.isArray(codify(testInput).all)).toBeTruthy();
        })
        //length of 'all' array in object should be the length of the input string split at line breaks
        it('contains a key "all" the length of which is the same as the length of the input string split at line breaks', () => {
            expect(testInput.split(/\r?\n/).length - 1).toBe(codify(testInput).all.length);
        });
        //no element in the 'females' array should contain the string 'Male'
        it('contains a "females" arrray that does not contains the string  "Male"', () => {
            const testFemales = codify(testInput).females.flat(1);
            testFemales.forEach((el) => expect(el).not.toMatch(/Male/));
        });
        //no element in the 'males' array should contain the string 'Female'
        test('contains a "males" arrray contains the string  "Female"', () => {
            const testMales = codify(testInput).males.flat(1);
            testMales.forEach((el) => expect(el).not.toMatch(/Female/));
        });
    });
});