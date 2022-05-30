// Template literals

const myFunc = (string, date) => {
    console.log('whole string is: ', string);
    console.log('date: ', date);
}

myFunc`this is a string with interpolation written at ${Date()}.`
