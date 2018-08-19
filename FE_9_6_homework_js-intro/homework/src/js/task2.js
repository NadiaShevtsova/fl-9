let a, b, angle, alfa, c, P, S, halfP;
let check=0;
let ten=10;
let degree=180;
while (check!==1) {
    a = Number(prompt('Enter the first side of triangle (a)', 0));
    if (a <= 0 || isNaN(a)) {
        forConsole('Invalid data');
    } else{
        check=1;
    }
}
check=0;
while (check !== 1) {
    b = Number(prompt('Enter the second side of triangle (b)', 0));
    if (b <= 0 || isNaN(b)) {
        forConsole('Invalid data');
    } else {
        check = 1;
    }
}
check=0;
while (check !== 1) {
    angle = Number(prompt('Enter the angle between two sides of triangle', 0));
    if (angle <= 0 || isNaN(angle)) {
        forConsole('Invalid data');
    } else {
        check = 1;
    }
}

alfa=angle*Math.PI/degree;
c = Math.sqrt(a*a + b*b - 2*a*b*Math.cos(alfa));
P=a+b+c;
halfP=P/2;
S=Math.sqrt(halfP*(halfP-a)*(halfP-b)*(halfP-c));

if (twoSign(c) > Math.floor(c)){
    if(twoSign(c)*100%ten===0){
        forConsole('c length: '+ Math.floor(c*ten)/ten);//one number after comma
    }else{
        forConsole('c length: '+ twoSign(c));//two number after comma
    }
} else {
    forConsole('c length: '+ Math.floor(c));//number
}

if (twoSign(S) > Math.floor(S)){
    if(twoSign(S)*100%ten===0){
        forConsole('Triangle square: '+ Math.floor(S*ten)/ten);//one number after comma
    }else{
        forConsole('Triangle square: '+ twoSign(S));//two number after comma
    }
} else {
    forConsole('Triangle square: '+ Math.floor(S));//number
}

if (twoSign(P) > Math.floor(P)){
    if(twoSign(P)*100%ten===0){
        forConsole('Triangle perimeter: '+ Math.floor(P*ten)/ten);//one number after comma
    }else{
        forConsole('Triangle perimeter: '+ twoSign(P));//two number after comma
    }
} else {
    forConsole('Triangle perimeter: '+ Math.floor(P));//number
}

function forConsole(out){
    console.log(out);
}

function twoSign(twoNumber){
    twoNumber = Math.floor(twoNumber*100)/100;
    return twoNumber;
}
