class Roulette {
    constructor() {

    }

    setLimits(limits) {
        game.scene.keys['Field'].setLimits(limits);
    }

    setBalance(balance) {
        game.scene.keys['Deposit'].setBalance(+balance);
    }

    setHist(history) {
        game.scene.keys['Menu'].historyWinBalls = [...history];
    }

    setChips(chips) {
        game.scene.keys['Menu'].setChips(chips);
    }

    setEnableBet(bool) {
        game.scene.keys['Field'].switchCellActive(bool);
    }

    setEnableGame(bool) {
        game.scene.keys['Menu'].hideMenu = !bool;
    }

    bindSpin(aQuick) {
        //aQuick - boolean (true or false)

        return {winMoney: 1000, winNom: random(0, 36), balance: 1000};
    }

    bindUndo() {
        console.log('undo')

        const allow = true; // вместо return true

        if (allow) {
            game.scene.keys['Field'].undo();
            // this.setUserBet()
        }
    }

    bindRepeat() {
        console.log('repeat')

        const allow = true; // вместо return true

        if (allow) game.scene.keys['Field'].rebet();
    }

    bindClear() {
        console.log('clear')

        const allow = true; // вместо return true

        if (allow) game.scene.keys['Field'].deleteBets();
    }

    showFatalError(error, aButton) {
        console.log(aButton)
    }

    showTipsMSG(msg) {
        const notice = game.scene.keys['Deposit'].createNoticeReconnect(msg);

        return {
            notice,
            close() {
                this.notice.destroy();
            }
        }
    }

    setUserBet(array) {
        game.scene.keys['Field'].overwriteBets(array);
    }

    bindBet(aIdBet, aAmount) {
        console.log(aIdBet, aAmount);

        return true;
    }

    bindShowStatistic(array = []) {
        if (!array.length) {
            const array = [];

            for (let i = 0; i < 37; i++) {
                array.push(random(0, 100));
            }

            game.scene.keys['Menu'].setHotAndColdNumbers(array);

            return
        }

        game.scene.keys['Menu'].setHotAndColdNumbers(array);
    }

    setLengFile(file) {
        game.scene.keys['Menu'].setLengFile(file);
    }
}

const game2 = new Roulette();

const setAll = () => {
    game2.setLimits({
        'TABLE': 1000,
        'STRAIGHT UP': 100,
        'SPLIT': 100000,
        'STREET': 100000,
        'CORNER': 100000,
        'LINE': 100000,
        'DOZEN': 100000,
        'COLUMN': 100000,
        'BLACK': 100000,
        'RED': 100000,
        'ODD': 100000,
        'EVEN': 100000,
        'LOW': 100000,
        'HIGH': 100000
    });
    game2.setLengFile({
        "deposit": "Депозит",
        "minBet": "Мин. Ставка",
        "maxBet": "Макс. Ставка",
        "spin": "Спин",
        "quickSpin": "Быстрый спин",
        "balance": "Баланс",
        "stake": "Ставка",
        "win": "Выигрыш",
        "undo": 'Отмена',
        "clear": 'Очистить',
        "rebet": 'Повторить',
    });
    game2.setLengFile({
        "deposit": "Deposit",
        "minBet": "Min. Bet",
        "maxBet": "Max. Bet",
        "spin": "Spin",
        "quickSpin": "Quick Spin",
        "balance": "Balance",
        "stake": "Stake",
        "win": "Win",
        "undo": 'Undo',
        "clear": 'Clear',
        "rebet": 'Rebet',
    });
    game2.setBalance('10000');
    game2.setHist([1, 15, 12, 2, 0, 15, 4, 5, 30]);
    game2.setChips([0.1, 0.5, 1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000]);

    // const tips = game2.showTipsMSG('Reconnecting');
    // tips.close();

    // game2.setEnableBet(false);
    // game2.setEnableGame(false)
};


