// 8) შექმენით saveUser ფუნქცია ამ სინტაქსით: const saveUser = () => { ... } რომელიც input-დან აიღებს მომხმარებლის სახელს და შეინახავს localStorage-ში setItem-ით. შექმენით loadUser = () => { ... } რომელიც ამოიღებს შენახულ მნიშვნელობას და DOM-ში გამოიტანს h2-ში. კომენტარებით ახსენით რატომაა arrow function მოსახერხებელი მცირე და ერთხელ გამოსაყენებელ ფუნქციებში


const saveUser = () => {
    let input = prompt("name: ");
    localStorage.setItem("name", input);
}

const loadUser = () => {
    let h2 = document.createElement("h2");
    h2.innerHTML = localStorage.getItem("name");
    document.body.appendChild(h2);
}