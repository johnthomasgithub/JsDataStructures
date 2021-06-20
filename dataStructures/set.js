 const ids = new Set(["john",1,3,100,09]);
 
console.log(ids.has("john"));

ids.delete("john");

ids.add("thomas");


 for(const ele of ids){
     console.log(ele);
 }

// add 
// delete 
// has 
