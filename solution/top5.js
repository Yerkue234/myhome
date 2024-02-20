
let fib = [0,1]
let n = 0
function myfun(number){

    for (i =2 ; i < number ; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }

    let sum = 0
    for(let num of fib){
        if(num % 2 !== 0){
            sum += num
        }
    }

    return sum
}


let resual = myfun(100)
console.log(resual);













