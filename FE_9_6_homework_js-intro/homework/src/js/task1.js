let price, discount, priceWithDiscount, saved;
let check=0;
let ten=10;

while (check!==1) {
    price = Number(prompt('Enter the price', 0));
    if (price <= 0 || isNaN(price)) {
        forConsole('Invalid data');
    } else{
        check=1;
    }
}
check=0;
while (check !== 1) {
    discount = Number(prompt('Enter the discount', 0));
    if (discount <= 0 || isNaN(discount)) {
        forConsole('Invalid data');
    } else {
        check = 1;
    }
}

saved = price * discount / 100;
priceWithDiscount = price-saved;

if (twoSign(price) > Math.floor(price)){
    if(twoSign(price)*100%ten===0){
        forConsole('Price without discount: '+ Math.floor(price*ten)/ten);//one number after comma
    }else{
        forConsole('Price without discount: '+ twoSign(price));//two number after comma
    }
} else {
    forConsole('Price without discount: '+ Math.floor(price));//number
}

if (twoSign(discount) > Math.floor(discount)){
    if(twoSign(discount)*100%ten===0){
        forConsole('Discount: '+ Math.floor(discount*ten)/ten);//one number after comma
    }else{
        forConsole('Discount: '+ twoSign(discount));//two number after comma
    }
} else {
    forConsole('Discount: '+ Math.floor(discount));//number
}

if (twoSign(priceWithDiscount) > Math.floor(priceWithDiscount)){
    if(twoSign(priceWithDiscount)*100%ten===0){
        forConsole('Price with discount: '+ Math.floor(priceWithDiscount*ten)/ten);//one number after comma
    }else{
        forConsole('Price with discount: '+ twoSign(priceWithDiscount));//two number after comma
    }
} else {
    forConsole('Price with discount: '+ Math.floor(priceWithDiscount));//number
}

if (twoSign(saved) > Math.floor(saved)){
    if(twoSign(saved)*100%ten===0){
        forConsole('Saved: '+ Math.floor(saved*ten)/ten);//one number after comma
    }else{
        forConsole('Saved: '+ twoSign(saved));//two number after comma
    }
} else {
    forConsole('Saved: '+ Math.floor(saved));//number
}

function forConsole(out){
    console.log(out);
}

function twoSign(twoNumber){
     twoNumber = Math.floor(twoNumber*100)/100;
     return twoNumber;
}
