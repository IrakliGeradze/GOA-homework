const username = form.elements.username;
const email = form.elements.email;
const phoneNumber = form.elements.number
const form = document.querySelector("form");
const data = document.getElementById("tbody");

function chamateba(evenObject){
    const username = username.value;
    const email = email.value;
    const phoneNumber = phoneNumber.value;
    data.innerHTML = `
        <tr>
            <td>${username}</td>
            <td>${email}</td>
            <td>${phoneNumber}</td>
        </tr>
    `
    form.reset()
}
form.onsubmit = chamateba;