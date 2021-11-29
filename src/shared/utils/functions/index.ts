

export function validationEmail(email: string) {
    const regexEmail = /\w+|\d+@\w+\.\w{3}/
    if(email.match(regexEmail)) {
        return true;
    }
    return false;
}

export function validatePassword(password: string){
    if(password.length > 8 && password.match(/[A-Z]/)){
        return true
    }
    return false
}

export function formatNumber(number: number){
    return  new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
      }).format(number)
}

export function orderNumber(array: number[]){
    return array.sort(function (a, b) {
        return a - b;
    });
}