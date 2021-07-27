function decadeOfTheDay(day){
if (day <= 10 ) {
var decade = 1;
}
if (day >= 11 && day <=20) {
decade = 2;
}
if (day >= 21 && day <=30) {
decade = 3;
}
alert(decade);
}
let day=4;
decadeOfTheDay(day);