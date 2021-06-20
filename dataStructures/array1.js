const arr = [4,2,41,2,36,34,9,56,8,25,97];

let i=0;
while(i != arr.length-1){
    if(arr[i]%2 == 0)
        arr.splice(i,1);
        else
            i++;   
}
console.log(arr);
