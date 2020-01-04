
let search = document.querySelector('.ddg_search') // affiche la bare de recherche 
let searchButton = document.querySelector('.ddg_search_button') // affiche le bouton de recherche

search.focus()

searchButton.onclick = function(event) { //Fonction du boutton 
  doASearch()
}

search.onkeydown = function(event) { //fonction de recherche 
  if (event.key == 'Enter') {
    doASearch()
  }
}


function doASearch() { //fonction de recherche    
  location.href = 'https://duckduckgo.com/?q=' + search.value.replace(/\s/g, '+') //Redirige vers le lien vers le moteur de recherche (duckduckgo)
}


let currentHour = addZeros(new Date().getHours()); // Permet d'afficher les heures
let currentMinute = addZeros(new Date().getMinutes()); // Permet d'afficher les minutes
let currentSec = addZeros(new Date().getSeconds()); // Permet d'afficher les secondes


setTime(); 
changeTextColor();      
getWeather();
setInterval(() => {    // permet de faire le lien entre la page html et JS des differents élements
setTime();               
changeTextColor();
}, 1000);

// Permet d'afficher la date 
function setTime() {
    currentHour = addZeros(new Date().getHours());
    currentMinute = addZeros(new Date().getMinutes());
    currentSec = addZeros(new Date().getSeconds());
        document.getElementById("spanHour").innerText = currentHour + " : " + currentMinute + " : " + currentSec;
}

function addZeros(nb) {
    if (nb < 10) {
        return "0" + nb;
    }
    return nb;
}


function changeTextColor() { //permet de changer de couleur le texte de l'heure
    if (currentSec % 2 === 0) {
        document.getElementById('spanHour').style.color = "	white";
    } else {
        document.getElementById('spanHour').style.color = "	white";
    }
}



function toggleHour() { //fonction pour afficher l'heure
    if (document.getElementById("spanHour").style.visibility === "hidden") {
        document.getElementById("spanHour").style.visibility = "visible";
    } else {
        document.getElementById("spanHour").style.visibility = "hidden";
    }
}

function getWeather() { //fonction pour afficher la tampérature exterieurs 
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () { //fonction qui va comuniquer avec l'api méteo 
        if (this.readyState == 4 && this.status == 200) {
            let weatherData = JSON.parse(this.responseText)
            if (weatherData) {
                document.getElementById("weather").innerText = weatherData.main.temp + "°C"
            }

        }
    };

    xmlhttp.open("GET", 'https://api.openweathermap.org/data/2.5/weather?lat=48.5839200&lon=7.7455300&units=metric&APPID=5cb51ce8b8a0b840ba9c6b64206801e1', true);   //Permet de réxuper L'api 
    xmlhttp.send();
}


afficherdate(); //permet d'afficher la date 


function afficherdate(){   // permet d'avoir la date)
    let numeroJour = new Date().getDay();
    let nomJour = jourStr(numeroJour);
    let numeroMois = new Date().getMonth();
    let nomMois = moisStr(numeroMois);
    let annee =new Date().getFullYear();
        document.getElementById("date").innerText = nomJour + " " + new Date().getDate() + " " + nomMois + " " + annee;
}

function jourStr(jour){ //fonction permet de convertire le numero du jour en jour ecrit en toute lettre 
    switch (jour){
case 0:
    return "Dimanche";
        break;

case 1:
    return "lundi";
        break;

case 2:
    return "mardi";
        break;

case 3:
    return "mercredi";
        break;

case 4:
    return "jeudi";
        break;

case 5:
    return "vendredi";
        break;

case 6:
    return "samedi";
        break;
        }
    }

function moisStr(mois){ //fonction qui permet de convertire le numero du mois en mois ecrit en toute lettre 
    switch (mois){

case 0:
    return "janvier";
        break;

case 1:
    return "février";
        break;

case 2:
    return "mars";
        break;

case 3:
    return "avril";
        break;

case 4:
    return "mai";
        break;

case 5:
    return "juin";
        break;
        
case 6:
    return "juillet";
        break;

case 7:
    return "août";
        break;
        
case 8:
    return "septembre";
         break;
        
case 9:
    return "octobre";
        break;

case 10:
    return "novembre";
        break;

case 11:
    return "decembre";
        break;
 }
    }
