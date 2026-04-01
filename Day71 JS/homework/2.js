// 3) შექმენით cryptoTracker აპი სადაც form submit-ზე მომხმარებელი ჩაწერს კრიპტოს სახელს გამოიყენეთ CoinGecko API [https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${crypto}](https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${crypto}) fetch მეთოდით წამოიღეთ JSON მონაცემები და გამოიტანეთ კრიპტოს სახელი ფასი და 24h ცვლილება დაამატეთ შეცდომის გამოტანა თუ კრიპტო არ მოიძებნა
// Requirements

// 1. HTML input და button მომხმარებლის საძიებოდ
// 2. async ფუნქცია fetchCrypto რომელიც გამოიძახებს API-ს
// 3. JSON მონაცემების მიღება და რენდერი ეკრანზე
// 4. შეცდომის გამოტანა თუ API არ აბრუნებს შედეგს
// 5. UI-ის გასუფთავება ყოველი ახალი ძიების წინ


let inputField = document.querySelector("input");
let button = document.querySelector("button");
let main = document.querySelector("main");

button.addEventListener("click", fetchCrypto)
function renderApi(info){
    main.innerHTML += `
        <div>
            <h2>Name: ${info.name}</h2>
            <h2>Price: ${info.current_price}</h2>
            <h2>24h Change: ${info.price_change_percentage_24h}%</h2>
        </div>
    `
}

async function fetchCrypto(){
    let crypto = inputField.value.toLowerCase();
    main.innerHTML = "";
    try{
        let response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${crypto}`);
        let data = await response.json();
        if(data.length === 0){
            main.innerHTML = "<h2>Crypto not found</h2>";
            return;
        }
        renderApi(data[0]);
    }catch(error){
        main.innerHTML = "<h2>Error fetching data</h2>";
    }
}