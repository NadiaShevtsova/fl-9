function isPrime(oneArgument){
    const two = 2;
    let check = 0;
    for(let i = 1; i <= oneArgument / two; i++){
        if (oneArgument % i === 0) {
            check++;
        }
    }

    return check < two;
}

isPrime();
