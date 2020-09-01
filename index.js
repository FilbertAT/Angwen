var randomNumber = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);

var picsMingYuArray = ["pics/MY1.jpg", "pics/MY2.jpg", "pics/MY3.png", "pics/MY4.jpg", "pics/MY5.jpg", "pics/MY6.jpg"];
var picsAngwenArray = ["pics/Angwen1.jpg", "pics/Angwen2.jpg", "pics/Angwen3.jpg", "pics/Angwen4.jpg", "pics/Angwen5.jpg", "pics/Angwen6.jpg"]
var picsChosen = picsMingYuArray[randomNumber];
var picsChosen2 = picsAngwenArray[randomNumber2];

document.querySelector(".img1").setAttribute("src", picsChosen);
document.querySelector(".img2").setAttribute("src", picsChosen2);

if (randomNumber === 3) {

  document.querySelector("h1").innerHTML = "Winner Winner Ivon Dinner!";
  prompt("Happy Birthday Angwen");

} else {

  document.querySelector("h1").innerHTML = "Sweet! You're Kim MingYu Future Waifu <3"

}
