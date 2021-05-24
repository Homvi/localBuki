let bets = {
  title: "Ádám szkanderozik",
  home: "Justin",
  guest: "Ádám",
  homeBets: [
    {
      name: "Kondor András",
      bet: 1,
    },
    {
      name: "Attila Nagy",
      bet: 1,
    },
    {
      name: "Szabó Sanyika",
      bet: 1,
    },
  ],
  guestBets: [
    {
      name: "Kondor Viktor",
      bet: 1,
    },
    {
      name: "Süveges Csaba",
      bet: 1,
    },
    {
      name: "Slash",
      bet: 1,
    },
  ],
};

let chosenTeam = null;
let homeBets = bets.homeBets;
let guestBets = bets.guestBets;

let sumOfHomeBets = 0;
let sumOfguestBets = 0;

for (let i = 0; i < homeBets.length; i++) {
  sumOfHomeBets += homeBets[i].bet;
}
for (let i = 0; i < guestBets.length; i++) {
  sumOfguestBets += guestBets[i].bet;
}

console.log(`The sum of home bets: ${sumOfHomeBets} `);
console.log(`The sum of guest bets: ${sumOfguestBets} `);

let betOfAndreas = homeBets[0].bet;

let selectTeam = document.getElementById("selectTeam");

const handleTeamSelect = () => {
  chosenTeam = selectTeam.value;
  console.log(chosenTeam);
};
selectTeam.onchange = handleTeamSelect;

let percentOfAndrew = betOfAndreas / sumOfHomeBets;

let winOfAndrew = sumOfguestBets * percentOfAndrew;

console.log(`Andrew is going to win: ${winOfAndrew}$`);

document.getElementById("homeBetsDiv").innerHTML = sumOfHomeBets;
document.getElementById("guestBetsDiv").innerHTML = sumOfguestBets;

let countButton = document.getElementById("count");
let bet = document.getElementById("bet");
let writtenWord = null;


const counterFunction = () => {
  if (chosenTeam == "Hazai") {
    let fullBets = parseInt(sumOfHomeBets) + parseInt(bet.value);
    let percentage = parseInt(bet.value) / fullBets;
    let win = sumOfguestBets * percentage;
    console.log(`you are going to win ${win.toFixed(2)}$`);
    writtenWord = win.toFixed(2)
  }
  if (chosenTeam == "Vendég") {
    let fullBets = parseInt(sumOfguestBets) + parseInt(bet.value);
    let percentage = parseInt(bet.value) / fullBets
    let win = sumOfHomeBets * percentage;
    console.log(`you are going to win ${win.toFixed(2)} $`);
    writtenWord = win.toFixed(2)
  }
  document.getElementById("calculatedValue").innerHTML = String(writtenWord)
};

countButton.onclick = counterFunction;
