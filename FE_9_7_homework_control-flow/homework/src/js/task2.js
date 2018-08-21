game(0, 0);

function game(check,yourPrize, startRange, startPrize) {
    let range = 5;
    let prize = 10;
    let answer = confirm('Do you want to play a game?');
    if (answer === true) {
      if(check > 0){
          range=startRange;
      }
      if (check>0){
          prize = startPrize;
      }
        let attempt = 3;
        let fin =0;
        let one=1;
        let prizeChange;
        let number;
        while (attempt > 0) {
            if (attempt===3) {
                yourPrize+=0;
                number = prompt('Enter a number from 0 to ' + range +'\n'+
                    'Attempt left: '+attempt+'\n'+
                    'Total prize: '+yourPrize+'\n'+
                    'Possible prize on current attempt: '+ prize, 0);
                if (number===null){
                    alert('You did not become a millionaire, but can.');
                    break;
                }
            }else{
                number = prompt('Enter a number from 0 to ' + range +'\n'+
                                    'Attempt left: '+attempt+'\n'+
                                    'Total prize: '+yourPrize+'\n'+
                                    'Possible prize on current attempt: '+ prizeChange, 0);
                if (number===null){
                    alert('You did not become a millionaire, but can.');
                    break;
                }
            }
            let checkNumber=numberForGame(range);
            if (checkNumber === +number) {
                if(attempt===3){
                    yourPrize+=prize;
                    alert('Congratulation! Your prize is: ' + yourPrize);
                    fin=one;
                    break;
                }else{
                    yourPrize += prizeChange;
                    alert('Congratulation! Your prize is: ' + yourPrize);
                    fin=one;
                    break;
                }
            } else {
                if(prizeChange!==prize/2){
                    prizeChange=Math.floor(prize / 2);
                }else {
                    prizeChange=Math.floor(prizeChange / 2);
                }
            }
            attempt--;
        }
        if(fin!==one){
            alert('Thank you for a game. Your prize is: '+ yourPrize);
        }
        startRange =range* 2;
        startPrize = prize * 3;
        fin=0;
        game(one, yourPrize, startRange, startPrize);
    } else {
        alert('You did not become a millionaire, but can.');
    }
}

function numberForGame(range) {
    let randomNumber = Math.floor(Math.random()*range);
    return randomNumber;
}
