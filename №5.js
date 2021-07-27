
function anagrams(test1, test2) {
    let punct = ";:.,?!-_—\"'(){} ";
    punct = punct.split('');
    for (let i = 0; i <= test1.length; i++) {
        for (let j = punct.length; j > 0; j--) {
            test1 = test1.replace(punct[j], "");
        }
    }
    for (let i = 0; i <= test2.length; i++) {
        for (let j = punct.length; j > 0; j--) {
            test2 = test2.replace(punct[j], "");
        }
    }
    test1 = test1.toLowerCase().split('').sort().join('');
    test2 = test2.toLowerCase().split('').sort().join('');
    let res = test1 == test2 ? 'Являются' : 'Не являются';
    alert(res);
}
let test1 = prompt('Введите 1-ую фразу: ', '');
let test2 = prompt('Введите 2-ую фразу: ', '');
anagrams(test1, test2);