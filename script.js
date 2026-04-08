let score = Number(localStorage.getItem('score')) || 0;
const scoreDisplay = document.getElementById('score-display');
scoreDisplay.innerHTML = `${score} yays`;
function incrementScore() {
  score += 1;
  localStorage.setItem('score', score);
  scoreDisplay.innerHTML = `${score} yays`
}
