let prime_number = parseInt(prompt("Enter any number to check, Is it prime or not?"));
let check = Boolean(Number(prime_number));

if (check) {

if(prime_number == 1){

    alert(`${prime_number} not a prime number nor a composite number`);
}else if(prime_number < 1){

    alert(  `${prime_number}  not a prime number`);
}else{

    for(var i = 2 ; i < prime_number ; i++){

        if(prime_number % i == 0){

            alert(`${prime_number} not a prime number`);
            break;

    }else{
        alert(`${prime_number} is a prime number`);
        break;
  

    }
}
}

}else{
    alert("please Enter a valid number");
}