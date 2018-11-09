$('.btn-info').click(function () {
  var playGame = new PlayGame(objects)
  playGame.shuffleObjects()

  var html = `<img src="images/` + playGame.objects[playGame.cardNumber].img + `">
    <div class="buttons text-center">
      <button type="button" class="btn btn-default food">Food</button>
      <button type="button" class="btn btn-default friend">Friend</button>
    </div>
    <div id="score"><h2>Score: 100%</h2></div>`

  $('#middle').html(html)

  var play = function () {

    //if button Food is clicked
    $('.food').click(function() {

      //if it is an animal, decrease points and show modal
      if (playGame.objects[playGame.cardNumber].type==='animal') {
        playGame.losePoints()
        $('#friendModal').modal('show')
        return
      }

      //if it is a veggie add object to Food
      var addToFood = `<img src="images/` + playGame.objects[playGame.cardNumber].img + `">`
      $('.food-objects').append(addToFood)

      //if out of objects, end game
      playGame.cardNumber++
      if (playGame.cardNumber===playGame.objects.length) {
        playGame.endGame()
      } else {
        //otherwise, show the next object
        var html = `<img src="images/` + playGame.objects[playGame.cardNumber].img + `">
        <div class="buttons text-center">
          <button type="button" class="btn btn-default food">Food</button>
          <button type="button" class="btn btn-default friend">Friend</button>
        </div>
        <div id="score"><h2>Score: ` + playGame.score + `%<h2></h2></div>`
    
        $('#middle').html(html)

        //and keep playing
        play(playGame.cardNumber)
      }
    })

    //if button Friend is clicked
    $('.friend').click(function() {

      //if it is a veggie, decrease points and show modal
      if (playGame.objects[playGame.cardNumber].type==='veggie') {
        playGame.losePoints()
        $('#foodModal').modal('show')
        return
      }

      //if it is an animal add object to Friends
      var addToFriend = `<img src="images/` + playGame.objects[playGame.cardNumber].img + `">`
      $('.friend-objects').append(addToFriend)

      //if out of objects, end game
      playGame.cardNumber++
      if (playGame.cardNumber===playGame.objects.length) {
        playGame.endGame()
      } else {
      //otherwise, show the next object
        var html = `<img src="images/` + playGame.objects[playGame.cardNumber].img + `">
        <div class="buttons text-center">
          <button type="button" class="btn btn-default food">Food</button>
          <button type="button" class="btn btn-default friend">Friend</button>
        </div>
        <div id="score"><h2>Score: ` + playGame.score + `%<h2></h2></div>`
        $('#middle').html(html)

        //and keep playing
        play(playGame.cardNumber)
      }
    })
  }
  play()
})