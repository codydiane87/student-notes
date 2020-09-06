function repeatStr (n, s) {
    let stringRe = "";
    while(n > 0){
      stringRe += s;
      n--
    }
    
    return stringRe;
  }