//This JavaScript file contains the logic for the password generator web application

// Constants for character sets
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numericChars = '0123456789';
const specialChars = '!@#$%^&*()_-+=<>?';

// Function to generate a random password based on user criteria
function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeNumeric = document.getElementById('numeric').checked;
    const includeSpecial = document.getElementById('special').checked;

    let charPool = '';

    if (includeLowercase) charPool += lowercaseChars;
    if (includeUppercase) charPool += uppercaseChars;
    if (includeNumeric) charPool += numericChars;
    if (includeSpecial) charPool += specialChars;

    if (charPool === '') {
        alert('Please select at least one character type.');
        return;
    }

    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool.charAt(randomIndex);
    }

    document.getElementById('password').value = password;
}
// Event listener for the "Generate Password" button
document.getElementById('generate').addEventListener('click', generatePassword);