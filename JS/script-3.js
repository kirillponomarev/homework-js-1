// TASK 3


let country = prompt('Выберите страну для доставки');

let price;


if (country) {
    
    const chooseCountry = country.toLowerCase();

    switch (chooseCountry) {
        case 'китай':
        price = 100;
        console.log(`доставка в ${country} будет стоить ${price} кредитов`);
        break;
    
        case 'южная америка':
        price = 250;
        console.log(`доставка в ${country} будет стоить ${price} кредитов`);
        break;
    
        case 'австралия':
        price = 170;
        console.log(`доставка в ${country} будет стоить ${price} кредитов`);
        break;
    
        case 'индия':
        price = 80;
        console.log(`доставка в ${country} будет стоить ${price} кредитов`);
        break;
    
        case 'ямайка':
        price = 120;
        console.log(`доставка в ${country} будет стоить ${price} кредитов`);
        break;
    
        default: 
        console.log('в указанную страну доставки нет!');
    }
}