const keyCode = document.getElementById('keyCode');
const keyKey = document.getElementById('keyKey');
const keyWhich = document.getElementById('keyWhich');
const keyInfoTabs = document.getElementById('info');
const startCover = document.getElementById('start');
const highlightedKey = document.getElementsByClassName('key');
var hasKeyBeenPressed = false;


document.addEventListener('keypress', function (event){
    keyCode.innerHTML = event.code ;
    keyKey.innerHTML = event.key ;
    keyWhich.innerHTML = event.which ;
    keyInfoTabs.style.display = 'flex';
    if (hasKeyBeenPressed == true){
        console.log("true");
    } else {
        console.log("false"); 
    startCover.style.display = "none";
    }
    console.log(keyInfoTabs);
    console.log(event.code);
    console.log(event.key);
    console.log(event);

})