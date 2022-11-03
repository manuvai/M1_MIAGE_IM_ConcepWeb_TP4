/**
 * @author manuvai.rehua@ut-capitole.fr
 */

function testDisponibilite(id) {
    let nbVoyageurs = parseInt(document.getElementById(id).value);
    let isValid = true;
    let destinationChoice = document.getElementById("destination-choice").value;
    let paymentByVacationCheck = document.getElementById("vacation-check").checked;
    let paymentByTransfer = document.getElementById("virement").checked;
    let valIBAN = document.getElementById("iban").value;

    if (isNaN(nbVoyageurs)) {
        isValid = false;
        alert("Veuillez renseigner un vrai nombre");
    } else if (nbVoyageurs < 0) {
        isValid = false;
        alert("Veuillez renseigner un nombre positif");
    } else if (nbVoyageurs > 20) {
        isValid = false;
        alert("Veuillez renseigner un nombre inférieur à 20 personnes");
    } else if (destinationChoice == 'foix' && nbVoyageurs < 5) {
        isValid = false;
        alert("Le voyage à Foix n’est disponible que pour 5 personnes ou plus");
    } else if (paymentByVacationCheck && (nbVoyageurs != 1 && nbVoyageurs != 2)) {
        isValid = false;
        alert("Le mode de paiement « Chèques vacances » n’est possible que pour 1 ou 2 personnes");
    } else if (paymentByTransfer && valIBAN.length <= 0) {
        isValid = false;
        alert("Pour le paiement par virement, vous devez renseigner l'IBAN");
    }

    return isValid;
}

function afficherIBAN() {
    displayIBAN(true);
}
function cacherIBAN() {
    displayIBAN(false);   
}

function displayIBAN(bol) {
    let display;
    if (bol) {
        display = 'block';
    } else {
        display = 'none';
    }

    let elt = document.getElementById('divIBAN');
    elt.style.display = display;
}