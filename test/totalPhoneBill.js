function totalPhoneBill(data) {
    // Split the input string into an array of call and SMS entries
    const entries = data.split(', ');

    // Initialize variables to keep track of call and SMS counts
    let callCount = 0;
    let smsCount = 0;

    // Calculate the number of calls and SMS messages
    for (const entry of entries) {
        if (entry === 'call') {
            callCount++;
        } else if (entry === 'sms') {
            smsCount++;
        }
    }

    // Calculate the total cost
    const callCost = callCount * 2.75; // R2.75 per call
    const smsCost = smsCount * 0.65; // R0.65 per SMS
    const totalCost = callCost + smsCost;

    // Return the total bill formatted as a string
    return `R${totalCost.toFixed(2)}`;
}


const inputString = 'call, sms, call, sms, sms';
const result = totalPhoneBill(inputString);
console.log('Total phone bill:', result);