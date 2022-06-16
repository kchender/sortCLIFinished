//takes in object returned by codify function
function sortData (obj) {
    //Output 1: gender sort -- sort females array and male arrays alphabetically (last name ascending)
    obj.females.sort();
    obj.males.sort();
    //spread contents of sorted arrays into output1 array (mutable - will be reassigned)
    let output1 = [...obj.females, ...obj.males]

    //Output 2: birthday sort -- store copy of 'all' array in mutable variable labeled output2
    let output2 = obj.all.slice();
    output2.sort((a, b) => {
        //if evaluated results of birthday string (index 3) passed into Date.parse() is the same, sort by last name (value at idx 0)
        if (Date.parse(a[3]) === Date.parse(b[3])) {
            return a[0] - b[0];
        //if not, sort by birthday
        } else {
            return Date.parse(a[3]) - Date.parse(b[3]);
        }
    });

    //Output 3: last name sort -- sort alphabetically then reverse (z -> a)
    let output3 = obj.all.sort().reverse();

    //reassign value of each output variable to evaluated result of flattening and joining each array, making each into a space-delimited string
    output1 = output1.flat(1).join(' ');
    output2 = output2.flat(1).join(' ');
    output3 = output3.flat(1).join(' ');
    
    //return concatenated output strings, including output title and line breaks/spaces to correct formatting
    return ' Output 1:\n ' + output1 + '\n Output 2:\n ' + output2 + '\n Output 3:\n ' + output3 + '\n';
}

module.exports = sortData;