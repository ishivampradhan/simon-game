var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];
var level = 0;
var shuru = 0;

//detcting keypress to start the game
$(document).keypress(function () {
  if (shuru == 0) {
    $("#level-title").text("Level " + level);
    nextSequence();
    shuru++;
  } else console.log("invalid key press");
});

// user response
$(".btn").click(function () {
  var Id = $(this).attr("id");
  console.log(Id);
  userClickedPattern.push(Id);
  console.log(userClickedPattern);
  playSound(Id);
  $("#Id").attr("class", "pressed");
  $("#Id").delay(100).removeClass("pressed");
  if (!check()) {
    $("h1").text("Refresh your page to start again");
  }
});

// checking number

function check(response) {
  for (var i = 0; i < userClickedPattern.length; i++) {
    if (gamePattern[i] != userClickedPattern[i]) return false;
  }
  if (gamePattern.length == userClickedPattern.length) {
    nextSequence();
    userClickedPattern = [];
  }
  return true;
}

// generating random sequence

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);
  level++;
  $("#level-title").text("Level " + level);
  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
  console.log(gamePattern);
}

//for sounds

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
