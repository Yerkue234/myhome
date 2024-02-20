//ໂຈດທີ່1:

function number(num){
  if(num <= 1){
    return false
  }
  for(let i = 2 ; i <= Math.sqrt(num); i++){
    if (num % i === 0){
      return false
    }
  }
  return true

}
 
let puls = 0
for (let i = 1; i <= 1000 ; i++){
  if(number(i)){
    puls += i
    // console.log(i)
  }
}

console.log("Answer: "+ puls)




