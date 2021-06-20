let arr = [1 ,2 ,3 ,"john" , 5];

arr.push("thomas");

// console.log(arr);

for(var i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

arr.splice(2,2);
console.log(arr);