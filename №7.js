function reverseString(str){

    let arr = new Array();
    arr = str.split("");
 
    let reverse= "";
  
    while(arr.length){
       reverse = reverse + arr.pop()
    }
  
    return reverse;
  }
  
  console.log(reverseString('shark ocean'));