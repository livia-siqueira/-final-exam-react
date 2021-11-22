

export function validationEmail(email: string) {
    const regexEmail = /\w+|\d+@\w+\.\w{3}/
    return email.match(regexEmail)
}

export function validatePassword(password: string){
    if(password.length > 8 && password.match(/[A-Z]/)){
        return true
    }
    return false
}