function fizzbuzz(n){
    let array=new Array()
    for(let i=0; i<n; i++){
        array[i]=i+1;
        if(array[i]%5==0 && array[i]%3==0) array[i]="fizzbuzz";
        if(array[i]%3==0) array[i]="fizz";
        if(array[i]%5==0) array[i]="buzz";
        
    }
    alert(array);
    
}

let n=prompt('enter',);
fizzbuzz(n);