//Day 178 Lesson 7
var practice = [['see', './resources/audio/see.mp3'], ['sees','./resources/audio/sees.mp3'], ['frog','./resources/audio/frog.mp3'], ["on",'./resources/audio/on.mp3'], ["log",'./resources/audio/log.mp3']];
var index = 0;
var wait = 0;
var times = 0;
var click = 0;
var $page = $('#page');
var $yes = $('#yes');
var random = "";
var L = practice.length;

var audio = document.createElement('audio');
for (i=0; i<L; i++) {
  audio.load(practice[i][1]);
};

$(document).ready(function() {

  $("#start").click(function() {
      $('.directions').css('display', 'none');
      writeWords($page, index);
   })

function newWord($page, index) {
      click = 0;
  if (times < L-1) {
      times = times + 1;
      index = index + 1;
      writeWords($page, index);
  } else {
      practiceWords($page, index);
  } //closes else
}; //closes newWord

function practiceWords($page, index) {
  if (wait === 2*L) {
    $('#yes').css('display', 'block');
  } else {
    wait = wait + 1;
  }; //closes else
  var index = Math.floor(Math.random() * L);
  writeWords($page, index);
}; //closes practiceWords

function writeWords($page, index) {
  $page.empty();
  random = practice[index][0];
  $page.html('<span>' + random + '</span>');
  var wordAudio = practice[index][1];
  audio.src = wordAudio;
  $page.unbind();
  $page.click(function() {
    if (click === 0) {
    $('span').css('text-shadow', '0px 0px white');
    audio.play();
    click = 1;
  window.setTimeout(function() {
    newWord($page, index);
}, 2000);
}; // closes if
}); //closes page click

$yes.unbind();
$yes.click(function() {
  $page.css('display', 'none');
  $('#yes').css('display', 'none');
  $('#endScreen').css('display', 'flex');
  for (var i=0; i<L; i++) {
  $('#endScreen').append('<h2>' + practice[i][0] + '</h2>');
};
  var audio = new Audio('./resources/audio/explain7.mp3');
  audio.play();
}); //closes yes

}; //closes writeWords

  }); // closes document load
