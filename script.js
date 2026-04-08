let score = Number(localStorage.getItem('score')) || 0;
let clickPowerMultiplier = 1;
const scoreDisplay = document.getElementById('score-display'); const news = document.getElementById('news-display'); //define elements
updateNews(); //call functions when game starts
const upgrades = {
  yippee: {
    cost: 15,
    cps: 0.1
  },
  yahoo: {
    cost: 100,
    cps: 1
  },
  woo: {
    cost: 1500,
    cps: 10
  },
  wahoo: {
    cost: 20000,
    clickBoost: 0.05
  },
  yippeekayay: {
    cost: 100000,
    cps: 100
  }
};
scoreDisplay.innerHTML = `${score} yays`;
function incrementScore() {
  score += 1 * clickPowerMultiplier;
  localStorage.setItem('score', score);
  scoreDisplay.innerHTML = `${score} yays`
  updateNews(); checkAchievements(); //call functions when score goes up
}
function updateNews() {
  if (score < 10) news.innerHTML = 'You live on a planet with no happiness.';
  else if (score < 50) news.innerHTML = 'You try calling out Yay. Everyone ignores you.';
  else if (score < 300) news.innerHTML = 'A few people are starting to get happier.';
  else if (score < 1000) news.innerHTML = 'Your new variations of Yay are trending in the state.';
  else if (score < 5000) news.innerHTML = 'The country is getting elated.';
  else if (score < 10000) news.innerHTML = 'There is a yearly worldwide parade, and people all chant Yay there.';
  else news.innerHTML = 'The planet is elated now. You saved everyone from gloom, and it all started because of a single word.';
}
const achievements = [
  { id: "firstYay", condition: () => score >= 1, text: "A tick of joy: Say your first Yay!" },
  { id: "hundredYays", condition: () => score >= 100, text: "Waves of Happiness: 100 Yays!" },
  { id: "thousandYays", condition: () => score >= 1000, text: "Getting excited: 1,000 Yays!" }, 
  { id: "tenthousandYays", condition: () => score >= 10000, text: "Saved the world: 10,000 Yays!" }
];
let unlocked = JSON.parse(localStorage.getItem("achievements")) || {};
let cps = 0;
setInterval(() => {
  score += cps;
  scoreDisplay.innerHTML = `${Math.floor(score)} yays`;
  localStorage.setItem('score', score);
}, 1000);
function checkAchievements() {
  achievements.forEach(a => {
    if (!unlocked[a.id] && a.condition()) {
      unlocked[a.id] = true;
      localStorage.setItem("achievements", JSON.stringify(unlocked));
      alert("Achievement unlocked: " + a.text);
    }
  });
}
function buy(upgrade) {
  if (score < upgrade.cost) {
    alert("Not enough yays!");
    return;
  }
  score -= upgrade.cost;
  scoreDisplay.innerHTML = `${Math.floor(score)} yays`;
  localStorage.setItem('score', score);
  if (upgrade.cps) {
    cps += upgrade.cps;
  }
  if (upgrade.clickBoost) {
    clickPowerMultiplier += upgrade.clickBoost;
  }
  alert("Upgrade purchased!");
}
