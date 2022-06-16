//require in file system module 
const fs = require('fs');
//require in readline module
const readline = require('readline');
//require in codify function
const codify = require('./codify');
//require in sort function
const sortData = require('./sortData');
//invoke createInterface on readline object and assign to variable
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function codifyThenSort () {
    //variable to store fileNames
    let fileNames;
    //variable to store file contents
    let fileContents = '';

    rl.question('Please replace the files in the "assets" directory with the files containing the data you would like to sort, save your changes, and click any key \n', () => {
        //read all files names in the directory synchronously and save to variable
        fileNames = fs.readdirSync(__dirname + '/assets', (err, list) => {
            //filter to filter out hidden files - prevent errors cause by .DS_Store etc.
            list = list.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));
        });
        //confirm that file names are correct before proceeding
        rl.question(`Do the following names correspond to the files containing the data you would like to have sorted?:\n\n ${fileNames.join(', ')} \n\n If yes type 'y' and click 'return', if no type 'n' and click 'return'\n`, (yOrN) => {
            //if correct
            if (yOrN === 'y') {
            //forEach element in the fileNames array
            fileNames.forEach((file) => {
                //read the file content synchronously - use template literal to turn buffer into readable string
                fileContents += `${fs.readFileSync(__dirname + '/assets/' + file)}\n`
            })
            const sortedOutput = sortData(codify(fileContents));
            //write method to write data to console
            rl.write(sortedOutput);
            // console.log('check:\n', check);
            rl.close();
            } else if (yOrN === 'n') {
                rl.write('Please confirm that the files in the assets folder are correct and run this program again.');
                rl.close();
            } else {
                rl.write('Invalid input. Please run the program again.');
                rl.close();
            }
        });
    });
}

codifyThenSort();

module.exports = codifyThenSort;