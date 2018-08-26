function reverseNumber(number) {
    const ten = 10, zero = 0;
    let strNumber = '', minus = '';
    minus = number < zero ? '-' : '';
    while (number !== zero) {
        strNumber += String(Math.abs(number) % ten);
        number = Math.floor(Math.abs(number) / ten);
    }

    return Number(minus += strNumber);
}

reverseNumber();
