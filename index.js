const cat = document.getElementById("Cat");
Coins = document.getElementById("Coins").innerText;
Food = document.getElementById("Food").innerText;
let Cost = 5;
let timesbaughtfood = 0;
let catScale = 1;

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function earn() {
    Coins = parseInt(Coins) + 1;
    document.getElementById("Coins").innerText = Coins;
    sleep(1500);
}

function trash() {
    Coins = parseInt(Coins) + Math.floor(Math.random() * 5) + 1; 
    document.getElementById("Coins").innerText = Coins;
    sleep(5000);
}

function gamble() {
    if (Coins >= 10) {
        Coins -= 10;
        
        let Gain = Math.floor(Math.random() * 20);
        Coins += Gain;
       
        document.getElementById("Coins").innerText = Coins;
    } 
    else {
        alert("not enough coins to gamble!");
    }

    sleep(3000);
}

function buyfood() {
    if (Coins >= Cost) {
        Coins -= Cost;

        Food = parseInt(Food) + 1;
        timesbaughtfood += 1;
        Cost = 5 + timesbaughtfood * 5;

        document.getElementById("Food").innerText = Food;
        document.getElementById("Coins").innerText = Coins;
        document.getElementById("Foodcost").innerText = Cost;
    }
    else {
        alert("not enough coins to buy food!");
    }
}

function fedcat() {
    catScale *= 1.1;

    cat.style.margin = (10 * catScale) + "px";
    cat.style.transform = `scale(${catScale})`;
}

function Feed() {
    if (Food >= 3) {
        Food -= 3;
        document.getElementById("Food").innerText = Food;
        fedcat();
    }
    else {
        alert("not enough food to feed your cat!");
    }
}

