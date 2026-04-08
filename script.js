let score = Number(localStorage.getItem('score')) || 0;
const scoreDisplay = document.getElementById('score-display');
const news = document.getElementById('news-display');
updateNews();
scoreDisplay.innerHTML = `${score} yays`;
function incrementScore() {
  score += 1;
  localStorage.setItem('score', score);
  scoreDisplay.innerHTML = `${score} yays`
  updateNews();
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
