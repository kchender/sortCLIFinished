//Goes through input string, converts it into an array, and codifies format.
function codify (str) {
    const arr = str.split(/\r?\n/);
    arr.pop();

    //object to store codified data that can be easily passed to sortData function
    const output = {
        //key-value pairs to store array of females, males, and all entries
        females : [],
        males : [],
        all: [],
    }

    //iterate through nested array of strings
    for (let i = 0; i < arr.length; i++) {
        //type variable will store value that dictates how current element will be manipulated
        let type;
        //for loop that we will break out of early unless the the current element is space-delimited
        for (let j = 0; j < arr[i].length; j++) {
            //if current element in subarray is a pipe, split current element at pipe (spaces included)
            if (arr[i][j] === '|') {
                type = 'pipe';
                arr[i] = arr[i].split(' | ');
                break;
            //if current element in subarray is a comma, split current element at comma (space included)
            } if (arr[i][j] === ',') {
                type = 'comma';
                arr[i] = arr[i].split(', ');
                break;
            }
        } //END OF INNER FOR FOR LOOP

        //If type is falsey (has not been assigned a value e.i. 'pipe' or 'comma'), reassign type to 'space' and split at spaces
        if (!type) {
            type = 'space';
            arr[i] = arr[i].split(' ');
        }

        //if pipe or comma delimited, must switch order of favorite color and birthday
        if (type === 'pipe' || type === 'comma') {
            //temp will store value last element in array at current index (birthday)
            let tempBirthday = arr[i][arr[i].length - 1];
            //reassign value of final element in array to that of next-to-final element (favorite color)
            arr[i][arr[i].length - 1] = arr[i][arr[i].length - 2];
            //reassign value of next-to-final element to that of tempBirthday
            arr[i][arr[i].length - 2] = tempBirthday;
        };

        //if pipe or space delimited, must change date and gender syntax
        if (type === 'pipe' || type === 'space') {
            //remove middle initial (element at idx 2) using splice
            arr[i].splice(2, 1);
            //reassign value of date (current) element to that of date element with all all hyphens replaced with forward slashes
            arr[i][arr[i].length - 2] = arr[i][arr[i].length - 2].replaceAll('-', '/');
            //if new value at idx 2 is 'f' or 'F', reassign to to "Female"
            if (arr[i][2] === 'f' || arr[i][2] === 'F') {
                arr[i][2] ='Female';
            //else if new value at idx 2 is 'm' or 'm', reassign to to "Male"
            } else if (arr[i][2] === 'm' || arr[i][2] === 'M') {
                arr[i][2] = 'Male';
            };
        }

        //push any subarrays containing 'Female' or 'Male' into appropriate storage array
        if (arr[i][2] === 'Female') {
            output.females.push(arr[i]);
        } else if (arr[i][2] === 'Male') {
            output.males.push(arr[i])
        };
        //push line break into current nested array to maintain desired formatting
        arr[i].push('\n');
        //still within for loop so each modified element will be into array at key 'all' in output object
        output.all.push(arr[i]);
    }
    //return output object so that it can be passed in as the argument to sortData
    return output;
}

module.exports = codify;