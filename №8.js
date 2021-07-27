function average(array){
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum+=array[i];
    }
    let average=sum/array.length;
    alert(average);
}
let array=[3, 5, 7, 6, 9, 2, 4, 1];
average(array);