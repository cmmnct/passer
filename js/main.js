const myName = "Mark";
const myPassword = "1234";
let loggedIn = false;

//checkPassword(prompt("Geef je Wachtwoord op"));

function checkPassword(value) {
    if (value == myPassword) {
        alert("Je bent succesvol ingelogd!")
        return true;
    }
    else if (confirm(`Helaas ${myName}, dit wachtwoord is onjuist... Wil je opnieuw proberen?`))
        checkPassword(prompt("Geef je Wachtwoord op"));
}


let merk = "Toyota";
let type = "Prius";
let kleur = "metallic blauw";
let omschrijving = "Anniversary model met exclusieve kleur en vele extra's!"


let myAge = 45;
let myIncome = 50000;
let myAverageweight = 78.5;
