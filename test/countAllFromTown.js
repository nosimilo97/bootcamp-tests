function countAllFromTown(registrationString, townPrefix) {
    const registrationNumbers = registrationString.split(',');

    
    let count = 0;

    for (const regNumber of registrationNumbers) {
        if (regNumber.trim().startsWith(townPrefix)) {
            count++;
        }
    }
  
    return count;
}


