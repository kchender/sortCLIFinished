//require in sortData function
const sortData = require('../sortData');

const testObj = {
    females: [
      [ 'Kelly', 'Sue', 'Female', '7/12/1959', 'Pink', '\n' ],
      [ 'Kournikova', 'Anna', 'Female', '6/3/1975', 'Red', '\n' ],
      [ 'Hingis', 'Martina', 'Female', '4/2/1979', 'Green', '\n' ],
      [ 'Seles', 'Monica', 'Female', '12/2/1973', 'Black', '\n' ]
    ],
    males: [
      [ 'Abercrombie', 'Neil', 'Male', '2/13/1943', 'Tan', '\n' ],
      [ 'Bishop', 'Timothy', 'Male', '4/23/1967', 'Yellow', '\n' ],
      [ 'Smith', 'Steve', 'Male', '3/3/1985', 'Red', '\n' ],
      [ 'Bonk', 'Radek', 'Male', '6/3/1975', 'Green', '\n' ],
      [ 'Bouillon', 'Francis', 'Male', '6/3/1975', 'Blue', '\n' ]
    ],
    all: [
      [ 'Abercrombie', 'Neil', 'Male', '2/13/1943', 'Tan', '\n' ],
      [ 'Bishop', 'Timothy', 'Male', '4/23/1967', 'Yellow', '\n' ],
      [ 'Kelly', 'Sue', 'Female', '7/12/1959', 'Pink', '\n' ],
      [ 'Smith', 'Steve', 'Male', '3/3/1985', 'Red', '\n' ],
      [ 'Bonk', 'Radek', 'Male', '6/3/1975', 'Green', '\n' ],
      [ 'Bouillon', 'Francis', 'Male', '6/3/1975', 'Blue', '\n' ],
      [ 'Kournikova', 'Anna', 'Female', '6/3/1975', 'Red', '\n' ],
      [ 'Hingis', 'Martina', 'Female', '4/2/1979', 'Green', '\n' ],
      [ 'Seles', 'Monica', 'Female', '12/2/1973', 'Black', '\n' ]
    ]
  }

describe('sortData', () => {
    //should return a string
    it('returns a string', () => {
        expect(typeof sortData(testObj)).toBe('string');
    });
    describe('output string', () => {
        //'Output 1,' 'Output 2,' and 'Output 3' should all be present
        it('contains the strings "Output 1," "Output 2," and "Output 3"', () => {
            expect(sortData(testObj)).toMatch(/Output 1|Output 2|Output3/);
        });
        //all three outputs should contain the same amount of data
        it('prints three outputs of the same length', () => {
            const splitStr = sortData(testObj).split(' ');
            //first element is a space -- must remove, only there for formatting
            splitStr.shift();
            let tempCount = 0;
            let count1;
            let count2;
            let count3;
            //could slice multiple times, but for loop has better time complexity than multiple invocations of slice
            for (let i = 0; i < splitStr.length; i++) {
                if (splitStr[i] === 'Output' && splitStr[i + 1] === '2:\n') {
                    count1 = tempCount;
                    tempCount = 0;
                }
                if (splitStr[i] === 'Output' && splitStr[i + 1] === '3:\n') {
                    count2 = tempCount;
                    tempCount = 0;
                }
                tempCount++;
            };
            count3 = tempCount;
            
            //should not be a falsy value (0 or undefined) -- so expecting truthy value
            expect(count1).toBeTruthy();
            //by transitive property, if these pass count3 === count 1
            expect(count1).toBe(count2);
            expect(count2).toBe(count3);
        })
    })
});