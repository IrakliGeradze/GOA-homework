function Book(title, author, year, available){
    this.title = title;
    this.author = author;
    this.year = year;
    this.available = available;
    this.toggleAvailability = function(){
        if(this.available == true){
            this.available = false;
        }
        else{
            this.available = true;
        }
    }
}

let book1 = new Book("Social Network", "Mark", 2010, true)
let book2 = new Book("Hackaton", "Kankia", 2026, false)
let book3 = new Book("Mainkaf", "Zurabi", 1939, true)

book1.toggleAvailability()
book2.toggleAvailability()


console.log(book1)
console.log(book2)
console.log(book3)