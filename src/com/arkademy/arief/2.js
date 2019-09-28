function is_username_valid(username){
    const pattern = /((?=.*[a-z])(?=.*[A-Z]).{6})/
    const regx = new  RegExp(pattern)
    return regx.test(username)
}

function is_password_valid(password){
    const pattern = /((?=.*[7])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@]).{5,10})/
    const regx =  new RegExp(pattern)
    return regx.test(password)
}


console.log(is_username_valid("coba12"))
console.log(is_username_valid("Devina"))



console.log(is_password_valid('p@ssW0rd9'))
console.log(is_password_valid('7Ark@demi'))
