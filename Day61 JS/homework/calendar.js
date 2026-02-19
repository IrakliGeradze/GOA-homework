let iDay = document.getElementById("inputDay")
let iMonth = document.getElementById("inputMonth")
let iYear = document.getElementById("inputYear")
let btn = document.getElementById("button")

let day = document.getElementById("days")
let month = document.getElementById("months")
let year = document.getElementById("years")

btn.addEventListener("click", function() {
    let userDate = new Date(
        Number(iYear.value),
        Number(iMonth.value) - 1,
        Number(iDay.value)
    )
    let today = new Date()
    let yearsPassed = today.getFullYear() - userDate.getFullYear()
    let monthsPassed = today.getMonth() - userDate.getMonth()
    let daysPassed = today.getDate() - userDate.getDate()

    if (daysPassed < 0) {
        monthsPassed--
        daysPassed += new Date(today.getFullYear(), today.getMonth(), 0).getDate()
    }
    if (monthsPassed < 0) {
        yearsPassed--
        monthsPassed += 12
    }
    year.textContent = yearsPassed + " Years"
    month.textContent = monthsPassed + " Months"
    day.textContent = daysPassed + " Days"
})