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

// const prompt = require('prompt-sync');

// let arr = ['alessandro', 'ciao', 'come', 'ancora'];
// let num = arr[Math.floor(Math.random() * arr.length)];
// let num2 = arr[Math.floor(Math.random() * arr.length)];
// // let firstWord = num;
// // let secondWord = arr[Math.floor(Math.random() * arr.length)];
// const arr2 = num.charAt(0).toUpperCase() + num.slice(1);
// const arr3 = num2.charAt(0).toUpperCase() + num2.slice(1);
// // console.log(arr2.concat(arr3));

// let arr4 = arr2.concat(arr3);
// console.log(arr4);
// console.log(arr2.length);
// console.log(arr3.length);
// console.log(arr4.length);
// // console.log(firstWord, secondWord);

// // for (let i = 1; i <= 1; i++) {
// //     console.log(firstWord, secondWord);
// // }

// if (
//     arr2.length >= 3 &&
//     arr2.length <= 7 &&
//     arr2.length >= 3 &&
//     arr2.length <= 7 &&
//     arr4.length >= 8 &&
//     arr4.length <= 10
// ) {
//     console.log(`The password is ${arr4}`);
// } else {
//     console.log('Password non valida');
// }

// console.log(arr.length);
// console.log(arr[0]);
// const arr2 = arr[Math.floor(Math.random() * arr.length)];
// // .charAt(0)
// // .toUpperCase()
// const arr3 = arr[Math.floor(Math.random() * arr.length)];

// console.log(arr2.concat(arr3));
