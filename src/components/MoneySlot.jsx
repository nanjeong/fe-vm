const getMoneyFromWallet = (input, wallet) => {
    const unitOfMoney = Object.keys(wallet);
    const difference = unitOfMoney.map((unit) => [
        Math.abs(input - unit),
        unit,
    ]);
    const minDifference = difference
        .sort((a, b) => a[0] - b[0])
        .filter(([_, unit]) => wallet[unit] > 0);

    return minDifference.length ? minDifference[0][1] : null;
};

function MoneySlot({ addRecord, wallet }) {
    const putMoney = (event) => {
        if (event.key !== "Enter") {
            return;
        }

        event.preventDefault();
        const moneyInput = event.target.value;
        event.target.value = "";

        const moneyFromWallet = getMoneyFromWallet(moneyInput, wallet);
        if (!moneyFromWallet) {
            return;
        }
        wallet[moneyFromWallet] -= 1;
        addRecord(`${moneyFromWallet}원이 투입됨`);
    };

    return (
        <form>
            <input
                type="number"
                min="10"
                max="10000"
                onKeyDown={putMoney}
                placeholder="0"
            ></input>
            <span>원</span>
        </form>
    );
}

export default MoneySlot;
