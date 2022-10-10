const keyCode = document.getElementById('keyCode');
const keyKey = document.getElementById('keyKey');
const keyWhich = document.getElementById('keyWhich');
const keyInfoTabs = document.getElementById('info');

document.addEventListener('keypress', function (event){
    keyCode.innerHTML = event.code ;
    keyKey.innerHTML = event.key ;
    keyWhich.innerHTML = event.which ;
    keyInfoTabs.style.display = 'flex';
    console.log(keyInfoTabs);
    console.log(event.code);
    console.log(event.key);
    console.log(event);

})