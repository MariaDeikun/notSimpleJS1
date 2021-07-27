function sortAscending(array){
    let temp;
    for (let i = 0; i < array.length-1; i++)
    {
        for (let j = 0; j < array.length - i-1; j++)
        {
            if (array[j + 1] < array[j])
            {
                temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
            }
        }
        
    }
    alert(array);
    }//по возрастанию
    function sortDescending(array){
    let temp;
    for (let i = 0; i < array.length-1; i++)
    {
        for (let j = 0; j < array.length - i-1; j++)
        {
            if (array[j + 1] > array[j])
            {
                temp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = temp;
            }
        }
            
    }
    alert(array);  
    }//по убыванию
    let array=[3, 5, 7, 6, 9, 2, 4, 1];
    sortAscending(array);
    sortDescending(array);