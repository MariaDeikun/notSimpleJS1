function numberOfVowels(string) {
    let count = 0;
  
    for (let i = 0; i < string.length; i++) {
      if (string[i].toLowerCase() === 'a' || string[i].toLowerCase() === 'e' || string[i].toLowerCase() === 'i' || string[i].toLowerCase() === 'o' || string[i].toLowerCase() === 'u'){
        count+= 1;
      }
    }
    
    return count;
 }
 
alert(numOfVowels('gang'));