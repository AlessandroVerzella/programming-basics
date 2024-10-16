const { readFile } = require('fs/promises');

let filePath = './sample_file.txt';

readFile(filePath)
    .then((data) => {
        const allTheWordsFile = data
            .toString()
            .replace(/[0-9.,\/#!$%\^&\*;:{}=\-_`~(),' ', \r\n]/g, ' ') // Remove all characters that are not letters
            .split(' ')
            .filter((element) => element !== ''); // Don't consider the empty space

        // Pick two random words from the file
        const firstWord =
            allTheWordsFile[Math.floor(Math.random() * allTheWordsFile.length)];
        const secondWord =
            allTheWordsFile[Math.floor(Math.random() * allTheWordsFile.length)];

        // Capitalise the first letter
        const firstWordPassword =
            firstWord.charAt(0).toUpperCase() + firstWord.slice(1);
        const secondWordPassword =
            secondWord.charAt(0).toUpperCase() + secondWord.slice(1);

        // Password with the two random words
        const twoWordRandomPassword =
            firstWordPassword.concat(secondWordPassword);

        // Check the conditions
        if (
            firstWordPassword.length >= 3 &&
            firstWordPassword.length <= 7 &&
            secondWordPassword.length >= 3 &&
            secondWordPassword.length <= 7 &&
            twoWordRandomPassword.length >= 8 &&
            twoWordRandomPassword.length <= 10
        ) {
            console.log(`The password is ${twoWordRandomPassword}`);
        } else {
            console.log('Password non valida');
        }
    })
    .catch((error) => {
        console.log('The program is unable to open the file you indicated');
    });
