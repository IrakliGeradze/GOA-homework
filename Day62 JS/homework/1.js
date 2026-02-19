// 2) შექმენით ღილაკი, რომელზე დაჭერისას body ელემენტში დაემატოს ახალი პარაგრაფი, რომელიც შეიცავს შემთხვევით რიცხვს 0-დან 1000-მდე დიაპაზონში. გამოიყენეთ Math.random და Math.floor ფუნქციები შემთხვევითი მთელი რიცხვის მისაღებად და კომენტარებით ახსენით რას აკეთებს თითოეული მათგანი

let btn = document.getElementById("button");
btn.onclick = function(){
    let p = document.createElement("p")
    p.textContent = Math.floor(Math.random() * 1000)
    document.body.appendChild(p)
}