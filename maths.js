var answer;
var score = 0;
var backgroundImages = [];

function nextQuestion() {
  const n1 = Math.floor(Math.random() * 5);
  document.getElementById('n1').innerHTML = n1;
  const n2 = Math.floor(Math.random() * 6);
  document.getElementById('n2').innerHTML = n2;
  answer = n1 + n2;
}

function checkAnswer() {
  const prediction = predictImage();
  console.log(`Answer ${answer} and prediction ${prediction}`);
  if (prediction == answer) {
    if (score < 6) {
      score++;
      backgroundImages.push(`url(images/background${score}.svg)`)
      document.body.style.backgroundImage = backgroundImages;
    } else {
      clearCanvas();
      backgroundImages = [];
      score = 0;
      alert("Well done! Your maths garden is in full bloom! Want to start again?")
      document.body.style.backgroundImage = backgroundImages;
    }
    console.log(`Correct! ${score}`);
    //document.body.style.backgroundImage = backgroundImages;
  } else {
    if (score>0) {
      score--;
      backgroundImages.pop();
      alert("Oops, that wasn't right!");
      setTimeout(function(){
        document.body.style.backgroundImage = backgroundImages;
      }, 1000)
    }
    console.log(`You suck! ${score}`);
  }
}
