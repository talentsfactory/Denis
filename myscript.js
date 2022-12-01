var button = document.getElementById('myButton');
var myAbout = document.getElementById('myAbout');
var modal = document.getElementById('myModel');
var nclose = document.getElementById('myClose');
var modalBut = document.getElementById('myModalButton');
var content = document.getElementById('myContent');


button.onclick = function() {
        modal.style.display = "block";
        setTimeout(opacity1, 100);
}

nclose.onclick = function() {
    content.style.opacity = "0";
    setTimeout(none, 1000);
}

modalBut.onclick = function() {
    alert("Сообщение отправлено")
}

function none() {
    modal.style.display = "none";
}

function opacity1() {
    content.style.opacity = "1";
}

nclose.onmouseenter = function() {
    nclose.style.fontSize = "60px";
}

nclose.onmouseleave = function() {
    nclose.style.fontSize = "";
}