// Declare a global counter variable.
// Create a simple function that increments the variable, and then calls itself recursively.
// Surround the initial function call in a try/catch block.
// Within the catch, log the error and the value of the counter variable.

// declare variable
let count = 0;

function incCount(){
    //base case (end our recursive call)
    count++;
    return incCount()
}
// End iteration condition
// Incrementing
// Declared

try{
    incCount()
} catch(error){
    console.log(error); 
    console.log(count);
}

//Recursive function
// a Recurive function will al itself over again until it reaches a base case (a condition)

/**
 explore:
 faltten a nested array

 [[1,2,3], [], [4,5,6, [7,8,9]]] => [1,2,3,4,5,6,7,8,9]
 [] => []
 Brainstorm: 
 solutions: recursion, clousers

 Plan:
 initialize results array

 initialize dfs (depth first search)
    if is index is grater than length
        return
    if curent index is an array 
            call dfs (index = 0, currentIndex =[])
            call dfs (next index, array)
        
        add number to our results array
        call dfs (next index, array)

    call dfs(0,array)

    return results
 */

function flattenArray(arr){
    const flattened = [];

    function dfs(index, currentArray){
        if (index === currentArray.length) return

        if (Array.isArray(currentArray[index])){
            dfs(0,currentArray[index]);
        }

        if(
            typeof currentArray[index]==='number' || 
            typeof currentArray[index]=== 'string')
            {
            flattened.push(currentArray[index]);
        }
        dfs(index +1, currentArray);

    }

    dfs(0, arr)

    return flattened;
}

console.log(flattenArray([[1,2,3], [], [4,5,6, [7,8,9]]]))


// function recursion(index, arr){
// if (index === arr.length) return;
// console.log(arr[index]);
// recursion(index + 1, arr);
// }

// console.log(recursion(0,[1,2,3,4,5]))


let primeNumber= document.querySelector(".primeNumber");

const isPrime= (num)=> {
    if (num <=1) return false; // if a number is negative return false

    // if a number is greater than 2 then perfom for loop
    if (num >= 2){
        for (let i = 2; i < num; i++){
            if (num%i === 0){ // if remained is 0 then it is not a prime number
                return false;
            }
        } 
    }
    return true;
}

const addPrimeNumber = (n, count = 1, sum = 0) =>{
    if( count > n){
        window.alert(`Calculation is finished. The sum of all prime number is ${sum}`) // use back ticks for temperal lietrals (base case)
        return;
    }
    if (isPrime(count)){
        sum = sum + count;
        primeNumber.innerHTML += `<h1> ${count} </h1> <br/>`
    }
    setTimeout(()=> addPrimeNumber(n, count +1, sum),0) // perfoming function then adding 1 everytime and also keeping the sum everytime

}

let n = 50;
addPrimeNumber(n);