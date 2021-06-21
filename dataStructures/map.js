const data = new Map();

data.set('name' , 'john');
data.set('age',21);
const lives = {country: "India", dist : "tvl"};
data.set(lives,true);

// console.log(data);

// for(const ele of data)
// {
//     console.log(ele);  
// }
// data.set('status', 'single');

// for(const ele of data)
// {
//     console.log(ele);
// }
console.log(data.get(lives));