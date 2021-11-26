import toast from "react-hot-toast";


export function validationEmail(email: string) {
    const regexEmail = /\w+|\d+@\w+\.\w{3}/
    if(email.match(regexEmail)) {
        return true;
    }
    else{
        toast.error('Password must have a capital character and at least 9 characters')
    }
}

export function validatePassword(password: string){
    if(password.length > 8 && password.match(/[A-Z]/)){
        return true
    }
    return false
}

export function orderNumber(array: number[]){
    return array.sort(function (a, b) {
        return a - b;
    });
}