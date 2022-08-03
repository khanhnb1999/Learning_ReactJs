import person from "./person.js";
var btn = document.getElementById('btn-click');
var html = document.querySelector(".demo");
btn.addEventListener('click', function(){
    html.innerHTML = person();
});