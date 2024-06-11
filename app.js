
let count = 0;

function incCount(){
    count++;
    return incCount()
}
try{
    incCount()
} catch(error){
    console.log(error); 
    console.log(count);
}
    // let i=0;
    // return function(inc){
    //     i +=1;
    //     return;
