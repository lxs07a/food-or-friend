var objects = [
  { name: 'apple', img: 'apple.svg', type: 'veggie', audio: 'audios/apple.mp3'},
  { name: 'banana', img: 'banana.svg', type: 'veggie', audio: 'audios/banana.mp3'},
  { name: 'carrot', img: 'carrot.svg', type: 'veggie', audio: 'audios/carrot.mp3'},
  { name: 'strawberry', img: 'strawberry.svg', type: 'veggie', audio: 'audios/strawberry.mp3'},
  { name: 'avocado', img: 'avocado.svg', type: 'veggie', audio: 'audios/avocado.mp3'},
  { name: 'broccoli', img: 'broccoli.svg', type: 'veggie', audio: 'audios/broccoli.mp3'},
  { name: 'tomato', img: 'tomato.svg', type: 'veggie', audio: 'audios/tomato.mp3'},
  { name: 'lettuce', img: 'lettuce.svg', type: 'veggie', audio: 'audios/lettuce.mp3'},
  { name: 'eggplant', img: 'eggplant.svg', type: 'veggie', audio: 'audios/eggplant.mp3'},
  { name: 'corn', img: 'corn.svg', type: 'veggie', audio: 'audios/corn.mp3'},
  { name: 'fish', img: 'fish.svg', type: 'animal', audio: 'audios/fish.mp3'},
  { name: 'shrimp', img: 'shrimp.svg', type: 'animal', audio: 'audios/shrimp.mp3'},
  { name: 'turkey', img: 'turkey.svg', type: 'animal', audio: 'audios/turkey.mp3'},
  { name: 'pig', img: 'pig.svg', type: 'animal', audio: 'audios/pig.mp3'},
  { name: 'chick', img: 'chick.svg', type: 'animal', audio: 'audios/chick.mp3'},
  { name: 'cow', img: 'cow.svg', type: 'animal', audio: 'audios/cow.mp3'},
  { name: 'crab', img: 'crab.svg', type: 'animal', audio: 'audios/crab.mp3'},
  { name: 'sheep', img: 'sheep.svg', type: 'animal', audio: 'audios/sheep.mp3'},
  { name: 'cat', img: 'cat.svg', type: 'animal', audio: 'audios/cat.mp3'},
  { name: 'dog', img: 'dog.svg', type: 'animal', audio: 'audios/dog.mp3'},
]  

var PlayGame = function (objects) {
  this.objects = objects
  this.cardNumber = 0
  this.score=100
  this.lostObjects = []
}

PlayGame.prototype.shuffleObjects = function () { 
  var unshuffled=objects
  var y =objects.length
  var shuffled = []
  for (let i=0; i<y; i++) {
    var x = Math.floor(Math.random()*(unshuffled.length))
    shuffled[i]=unshuffled[x]
    unshuffled.splice(x, 1)
  }
  this.objects=shuffled
}

PlayGame.prototype.losePoints = function () {
  //substract points only once per object
  if (!this.lostObjects.includes(this.cardNumber)) {
    this.lostObjects.push(this.cardNumber)
    this.score-=5
    $('#score').html(`Score: ` + this.score + `%`)
  }
}

PlayGame.prototype.endGame = function () {
  $('#gameOverModal').modal('show')
  var html = `<img src="images/rainbow.svg">`  

  $('#middle').html(html)
  var html2 = `<div class="text-center">
  <button type="button" id="again" class="btn btn-info" onclick="document.getElementById('click').play();">Play again</button>
  </div>`
  $('.buttons').html(html2)

  //Play again?
  $('#again').click(function (){
    location.reload();
  })
}

PlayGame.prototype.changePicture = function () {
  var html = `<div id="pic"><img src="images/` + this.objects[this.cardNumber].img + `"></div>
  <audio id="pic-audio" autoplay src="` + this.objects[this.cardNumber].audio +`"> </audio>`
  $('#middle').html(html)
}