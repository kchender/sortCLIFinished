# Description
This command line application will access string data from local files and sort that data three ways, printing the results of each sort in the command line.

The data printed below `Output 1:` will be sorted by gender first (women before men) and then by last name, ascending (A to Z).

The data printed below `Output 2:` will be sorted by birthdate (oldest to youngest) and then by last name, ascending (A to Z).

The data printed below `Output 3:` will be sorted by last name, descending (Z to A).

# Version Requirements
Node.js >= v15

# Installation
1) Type `npm install` into the command line and click `return`.
2) To run the program, type `npm run start-sort` in the command line and click `return`.
3) Follow the prompts in the command line.

# Usage
This application will only work for string data formatted in the following ways:

**Pipe-delimited:**

`LastName | FirstName | MiddleInitial | Gender | FavoriteColor | DateOfBirth`

**Comma-delimited:**

`LastName, FirstName, Gender, FavoriteColor, DateOfBirth`

**Space-delimited:**

`LastName FirstName MiddleInitial Gender DateOfBirth FavoriteColor`

# Testing
To run all unit tests, type `npm test` into the command line and click `return`.

To run unit tests for specific files, type `npm test -- <filename>` and then click `return`. **Note:** do not include the extension in the file name.
