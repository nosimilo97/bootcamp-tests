function regCheck(regNo, regEnd) {
    return regNo.endsWith(regEnd)
  }
  console.log(regCheck('RG 45 HN GP'));
  console.log(regCheck('LKG 679 ECP'));
  console.log(regCheck('GHT 456 MP'));
  console.log(regCheck('FGT 491 L'));