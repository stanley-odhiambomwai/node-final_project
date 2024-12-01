const generatePassword = require("generate-password");

const password = generatePassword.generate({
    length: 10,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
    strict: true
});

console.log("generated password: ", password);