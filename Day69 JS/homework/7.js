// 8) გააკეთეთ fetch მოთხოვნა მისამართზე https://jsonplaceholder.typicode.com/posts და then ბლოკში გამოიტანეთ მხოლოდ პირველ 5 პოსტის title კომენტარებში ახსენით რა არის response.json და რატომ უნდა გამოვიყენოთ ის

let main = document.getElementById("main");

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
        let firstFivePosts = data.slice(0, 5);
        firstFivePosts.forEach(info => {
            main.innerHTML += `
                <div>
                    <h2>${info.title}</h2>
                </div>
            `;
        });
    })

// response.json() იღებს სერვერიდან მიღებულ JSON მონაცემებს
// და გარდაქმნის მათ JavaScript ობიექტებად ან მასივად
// ეს საჭიროა იმიტომ, რომ fetch თავიდან აბრუნებს raw response-ს
// და არა პირდაპირ JavaScript მონაცემებს