const keyCode = document.getElementById("keyCode");
const keyKey = document.getElementById("keyKey");
const keyWhich = document.getElementById("keyWhich");
const keyLoc = document.getElementById("keyLoc");
const keyInfoTabs = document.getElementById("info");
const startCover = document.getElementById("start");
const highlightedKey = document.getElementsByClassName("key");
var hasKeyBeenPressed = false;

document.addEventListener("keydown", function (event) {
  keyCode.innerHTML = event.code;
  keyKey.innerHTML = event.key;
  keyLoc.innerHTML = event.location;
  keyWhich.innerHTML = event.which;
  keyInfoTabs.style.display = "flex";
  if (hasKeyBeenPressed == true) {
    console.log("true");
  } else {
    console.log("false");
    startCover.style.display = "none";
  }
  if (event.key == highlightedKey.innerHTML) {
    console.log("true");
  }
  console.log(keyInfoTabs);
  console.log(event.code);
  console.log(event.key);
  console.log(event);
  
  for (i = 0; i < highlightedKey.length; i++) {
    highlightedKey[i].style.boxShadow = "";
    // console.log(highlightedKey[i].innerHTML.replace(/(\n|<br>)/gm,"").split(" ").includes(event.key.toUpperCase()))
    if (highlightedKey[i].innerHTML.trim() == event.key.toUpperCase()) {
        highlightedKey[i].style.boxShadow = "0px 0px 10px #14b524";
        console.log("true");
    }
  }
  // console.log(highlightedKey.length)

  console.log("------------ End of Log ------------");
});
