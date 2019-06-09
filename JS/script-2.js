// TASK 2


const credits = 23580;

const priceDroid = 3000;

let totalPrice;

let amountDroid = prompt('Введите количество желаемых дроидов!');

if (!amountDroid) {
    alert('Отменено пользователем!');
} else if(amountDroid) {
    totalPrice = amountDroid * priceDroid;
}

if (totalPrice > credits) {
    console.log('Недостаточно средств');
} else if(totalPrice < credits) {
    console.log(`Вы приобрели ${amountDroid} дроидов на счету осталось ${credits - totalPrice}`);
}
