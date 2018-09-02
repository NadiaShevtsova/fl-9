function userCard(keyCard) {
    const options = {
        key: keyCard,
        balance: 100,
        transactionLimit: 100,
        historyLogs: []
    }

    function getCardOptions(){

        return options;
    }

    function putCredits(putMoney) {
        options.balance += putMoney;
        options.historyLogs.push({
            operationType: 'Received credits',
            credits: putMoney,
            operationTime: new Date().toLocaleString('en-GB')
        })
    }

    function takeCredits(takeMoney) {
        if (options.balance >= takeMoney) {
            options.balance -= takeMoney;
            options.historyLogs.push({
                operationType: 'Withdrawal of credits',
                credits: takeMoney,
                operationTime: new Date().toLocaleString('en-GB')
            })
        }
    }

    function setTransactionLimit(transaction) {
        options.transactionLimit = transaction;
        options.historyLogs.push({
            operationType: 'Transaction limit change',
            credits: transaction,
            operationTime: new Date().toLocaleString('en-GB')
        })
    }

    function transferCredits(sum, card) {
        if (sum > options.transactionLimit || sum > options.balance || card === undefined){
            console.log('Error');
        } else{
            let tax = 0;
            const zeroFive = 0.5, hundred = 100;
            tax = sum - sum * zeroFive / hundred;
            card.putCredits(tax);
            this.takeCredits(sum);
            }
        }
    
    return {getCardOptions, putCredits, takeCredits, setTransactionLimit, transferCredits}
}

function UserAccount(name) {
    const optionsForUser = {
        name: name,
        cards: []
    }

    function addCard() {
        const three = 3;
        optionsForUser.cards.push(getCardByKey);
        let len = optionsForUser.cards.length;

        if (len > three) {
             optionsForUser.cards.length -= 1;
        }
    }

    function getCardByKey(key) {
        if (key <= optionsForUser.cards.length) {

            return userCard(key);
        }
    }

return {addCard, getCardByKey}
}
