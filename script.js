let answer = document.querySelector("span.answer");
let answer2 = document.querySelector("span.answer2");
let diffTime = document.querySelector("span.diffTime");
let diffDays = document.querySelector("span.diffDays");
let date = new Date();
let curDate = date.getDate() + "/" + (date.getUTCMonth() + 1);

if (curDate != "26/9") {
	answer.innerHTML = "Non.";
	answer2.innerHTML = "Ce n'est pas";
} else {
	answer.innerHTML = "Oui !";
	answer2.innerHTML = "C'est effectivement";
}
let difference;
let anniv;
if (date.getMonth() > 8 || (date.getMonth() == 8 && date.getDate() >= 26)) {
	//si on est après l'anniversaire ou pendant
	anniv = new Date("09/26/" + (date.getFullYear() + 1));
	console.log("anniv en cours ou passé");
} else {
	anniv = new Date("09/26/" + date.getFullYear());
	console.log("anniv bientôt");
}

function ChangeMS() {
	let diffTimeNumber = Math.abs(Date.now() - anniv);
	diffTime.innerHTML = diffTimeNumber;
	diffDays.innerHTML = Math.ceil(diffTimeNumber / (1000 * 60 * 60 * 24));
}

ChangeMS();
setInterval(ChangeMS, 1);
