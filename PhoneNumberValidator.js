function telephoneCheck(str) {
    if ((str.includes("(") && !str.includes(")")) || (str.includes(")") && !str.includes("("))) {
    return false
  }
  else {
    var validatePh = /^(1)?(\s)?(\()?[0-9]{3}(\))?(\s)?(\-)?[0-9]{3}(\s)?(\-)?[0-9]{4}$/ig;
  return validatePh.test(str);
  }
}

  //^(1)? = 1 at the begginning of string, repeated once or not at all
  //(\s)? = a space repeated once or not at all
  //(\()? = ( repeated once or not at all
  //[0-9]{3} = 3 digits
  //(\))? = ) repeated once or not at all
  //(\s)? = a space repeated once or not at all
  //(\-)? = a - repeated once or not at all
  //[0-9]{3} = 3 digits
  //(\s)? = a space repeated once or not at all
  //(\-)? = a - repeated once or not at all
  //[0-9]{4}$ = 4 digits at the end of string