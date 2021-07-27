function minElement(array){
    let min=array[0];
    for (let i = 0; i < array.length; i++)
    {
        if(array[i]<min)
        {
            min=array[i];
        }          
    }
    alert(min);
}//минимальное
function maxElement(array){
    let max=array[0];
    for (let i = 0; i < array.length; i++)
    {
        if(array[i]>max)
        {
            max=array[i];
        }          
    }
    alert(max);
}//максимальное
let array=[3, 5, 7, 6, 9, 2, 4, 1];

minElement(array);
maxElement(array);