function countAllPaarl(registrationString) {
    // Split the input string into an array of registration numbers
    const registrationNumbers = registrationString.split(',');

    // Initialize a counter for Paarl registration numbers
    let count = 0;

    // Check each registration number for Paarl prefix
    for (const regNumber of registrationNumbers) {
        if (regNumber.trim().startsWith('CJ')) {
            count++;
        }
    }

    return count;
}

// Example usage:
const registrations = 'CL 124,CY 567,CJ 123,CK 456,CL 341';
const paarlCount = countAllPaarl(registrations);

console.log('Number of Paarl registration numbers:', paarlCount);