function palindrome(str) {
    let strReversed = str.split('').reverse().join('').toLowerCase();
    str = str.toLowerCase();
    let res = (str == strReversed ? 'Является' : 'Не является');
    alert(res);
}
let polindrom = prompt('Введите строку ', '');
palindrome(polindrom);