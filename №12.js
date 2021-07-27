function yearSeason(month){
if (month == 12 || month <= 2) {
var result = 'Зима';
}
if (month >= 3 && month <= 5) {
result = 'Весна';
}
if (month >= 6 && month <= 8) {
result = 'Лето';
}
if (month >= 9 && month <= 11) {
result = 'Осень';
}
alert(result);
}
let month=3;
yearSeason(month);