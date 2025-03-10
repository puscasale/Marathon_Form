function generateCodInscriere() {
    let timestamp = new Date().getTime().toString().slice(-6);
    let randomNum = Math.floor(1000 + Math.random() * 9000);
    return "MAR" + timestamp + randomNum;
}

function validateForm(event) {
    let nume = document.getElementById("nume").value;
    let email = document.getElementById("email").value;
    let telefon = document.getElementById("telefon").value;
    let numarCard = document.getElementById("numar_card").value;
    
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let telefonRegex = /^\d{10}$/;
    let cardRegex = /^\d{16}$/;
    
    if (nume.trim() === "") {
        alert("Numele nu poate fi gol!");
        event.preventDefault();
        return false;
    }
    
    if (!emailRegex.test(email)) {
        alert("Introdu o adresă de email validă!");
        event.preventDefault();
        return false;
    }
    
    if (!telefonRegex.test(telefon)) {
        alert("Numărul de telefon trebuie să aibă 10 cifre!");
        event.preventDefault();
        return false;
    }
    
    if (numarCard.trim() !== "" && !cardRegex.test(numarCard)) {
        alert("Numărul cardului trebuie să conțină 16 cifre!");
        event.preventDefault();
        return false;
    }
    
    return true;
};
window.onload = function() {
    document.getElementById("cod_inscriere").value = generateCodInscriere();
}