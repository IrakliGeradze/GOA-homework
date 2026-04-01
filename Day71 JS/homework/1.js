// 2) შექმენით data.json ფაილი სადაც ჩაწერთ ხელით 3 ობიექტიან მასივს მაგალითად {id name balance} შემდეგ ეს json ფაილი დაკოპირეთ და JS ფაილში შეიტანეთ როგორც const data = [...] გამოიყენეთ JSON.stringify რომ ეს მასივი გადაიქცეს სტრინგად და შეინახოთ localStorage-ში შემდეგ JSON.parse გამოყენებით ამოიღეთ და გამოიტანეთ ekranzec
// Requirements

// 1. შექმენით JSON მასივი data.json-ში
// 2. დაკოპირებული მონაცემები ჩასვით JS-ში const data = [...]
// 3. JSON.stringify გამოიყენეთ localStorage.setItem-ში გადასატანად
// 4. JSON.parse გამოიყენეთ localStorage.getItem მონაცემის დასაბრუნებლად
// 5. გამოიტანეთ მიღებული ობიექტები ეკრანზე

const data =
    [
        {
            "Id": 159284018,
            "Name": "irakli",
            "Balance": 500
        }
    ]

localStorage.setItem("Balances", JSON.stringify(data));
console.log(JSON.parse(localStorage.getItem("Balances")))