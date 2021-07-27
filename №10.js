function changeNumbers(str){

str = str.split('')

for(let i = 0; i < str.length; i += 2) {
  [str[i], str[i+1]] = [str[i+1], str[i]];
}

console.log(str);
}
let str = '123456'
alert(changeNumbers(str));