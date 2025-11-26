#10) მოცემული სიაა: ["georgia", "aRMENIA", "greeCE"]. ყველა ელემენტს ჯერ გაუკეთეთ lower, შემდეგ capitalize და დაბეჭდეთ

countries = ["georgia", "aRMENIA", "greeCE"]

for country in countries:
    new_country = country.lower().capitalize()
    print(new_country)