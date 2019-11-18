// Recieve data from CryproCompare-server
const getCoursesOfCryptoCurrencies = async () => {
    const res = await fetch(
        'https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,XRP,BTC,LTC,XMR,BCH,TRX&tsyms=USD&067169127c6d0870125562e56237756eb5204917494a13d8e115d3ed5706c28d'
    );

    if (!res.ok) {
        throw new Error('I could not get data');
    }

    const data = await res.json();
    return Object.values(data).map(it => it.USD);
};

const allSums = [8824.02, 184.45, 0.2778, 60.99, 60.51, 280.91];
const currencies = document.querySelectorAll('.cource');

getCoursesOfCryptoCurrencies()
    .then(body => {
        for (let i = 0; i < currencies.length; i++) {
            currencies[i].querySelector('.cource-in-dollars').textContent = body[i];
            let profit = +(((body[i] - allSums[i]) / allSums[i]) * 100).toFixed(2);
            currencies[i].querySelector('.profit').textContent = profit;

            if (profit < 0) {
                currencies[i].querySelector('img').src = './assets/red-arrow.png';
                currencies[i].querySelector('.profit').style.color = '#ec5656';

            } else {
                currencies[i].querySelector('.profit').style.color = '#23af61';
            }
        }
    })
    .catch(error => console.log(error));

// BTC/USD
const getCourseOfBitcoinInDollars = async () => {
    const res = await fetch(
        'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD'
    );

    if (!res.ok) {
        throw new Error('I could not get data');
    }

    return await res.json();
};

// BTC/EURO
const getCourseOfBitcoinInEuros = async () => {
    const res = await fetch(
        'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=EUR'
    );

    if (!res.ok) {
        throw new Error('I could not get data');
    }

    return await res.json();
};

getCourseOfBitcoinInDollars().then(body => {
    document.querySelector('.course-dollars').textContent = body.USD;
});

getCourseOfBitcoinInEuros().then(body => {
    document.querySelector('.course-euros').textContent = body.EUR;
});