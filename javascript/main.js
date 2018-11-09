$('*').keypress(function(e){
  if(e.which == 13){//Enter key pressed
    $('.btn-info').click()//Trigger button click event
  }
})

$('.btn-info').click(function () {
  //click sound
  $('#click')[0].play()

  var playGame = new PlayGame(objects)
  playGame.shuffleObjects()

  //load first picture and buttons
  var html = `<div id="pic"><img src="images/` + playGame.objects[playGame.cardNumber].img + `"></div>
  <audio autoplay id="pic-audio" src="` + playGame.objects[playGame.cardNumber].audio +`"> </audio>`
  $('#middle').html(html)

  var htmlPic =`<div class="buttons text-center">
  <button type="button" class="btn btn-default food">Food</button>
  <button type="button" class="btn btn-default friend">Friend</button>
  </div>`
  $('.buttons').html(htmlPic)

  var htmlScore = `<div id="score"><span class="h2 text-center">Score: 100%</span></div>`
  $('#score').html(htmlScore)

  //if button Food is clicked
  $('.food').click(function() {
    //click sound
    $('#click')[0].play()

    //if it is an animal, decrease points and show modal
    if (playGame.objects[playGame.cardNumber].type==='animal') {
      playGame.losePoints()
      $('#dont-eat-me')[0].play()
      $('#friendModal').modal('show')
      return
    }

    //if it is a veggie add object to Food
    var addToFood = `<img src="images/` + playGame.objects[playGame.cardNumber].img + `">`
    $('.food-objects').append(addToFood)

    //if out of objects, end game
    playGame.cardNumber++
    if (playGame.cardNumber===playGame.objects.length) {
      $('#yay')[0].play()
      playGame.endGame()
    } else { 
      $('.food').blur()
      playGame.changePicture() 
    }
    //if picture is clicked, play sound
    $('#pic').click(function() {
      $('#click')[0].play()
      $('#pic-audio')[0].play()
    })
  })

  //if button Friend is clicked
  $('.friend').click(function() {
    //click sound
    $('#click')[0].play()

    //if it is a veggie, decrease points and show modal
    if (playGame.objects[playGame.cardNumber].type==='veggie') {
      playGame.losePoints()
      $('#eat-me')[0].play()
      $('#foodModal').modal('show')
      return
    }

    //if it is an animal add object to Friends
    var addToFriend = `<img src="images/` + playGame.objects[playGame.cardNumber].img + `">`
    $('.friend-objects').append(addToFriend)

    //if out of objects, end game
    playGame.cardNumber++
    if (playGame.cardNumber===playGame.objects.length) {
      $('#yay')[0].play()
      playGame.endGame()
    } else { 
      $('.friend').blur()
      playGame.changePicture() 
    }
    //if picture is clicked, play sound
    $('#pic').click(function() {
      $('#click')[0].play()
      $('#pic-audio')[0].play()
    })
  })
  $('#pic').click(function() {
    $('#click')[0].play()
    $('#pic-audio')[0].play()
  })
})