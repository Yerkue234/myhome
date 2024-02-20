const crypto = require('crypto')

const secretKey = "abcdef"
let number = 0
let hashValue = ""

while (!hashValue.startsWith("000000")){
    number ++
    const data = secretKey + number
    hashValue = crypto.createHash('md5')
    .update(data)
    .digest('hex')
}

console.log(`the smallest base 10 didgit for the secret key ${secretKey} is ${number}`)