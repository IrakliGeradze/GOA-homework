// 2) შექმენით ობიექტი user, სადაც property-ის სახელი უნდა იყოს დინამიური ცვლადიდან მიღებული. გამოიყენეთ computed property syntax [variable] და დაამატეთ username, email და score ველები. შემდეგ შექმენით ფუნქცია increaseScore(amount), რომელიც გაზრდის score-ს

const username = "name";

const user = {
    [username]: "irakli",
    email: "ika@gmail.com",
    score: 0,
    increaseScore: function(amount){
        this.score += amount;
    }
};

