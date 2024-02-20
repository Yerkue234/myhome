let factoArro =[]
let num = 2

function primeFactor(number){

    while (num <= number){
        if(number % num === 0){
            factoArro.push(num)
            number /= num
        }

        else{
            num += 1
        }
    }

    return factoArro

}

console.log(primeFactor(87492774))



