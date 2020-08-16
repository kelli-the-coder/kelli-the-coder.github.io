function change_gif(){
if (document.getElementById("duckgif").getAttribute('src') == "duck.gif") {
  document.getElementById("duckgif").src = "Baby_Beter.PNG"; 
  document.getElementById("changegif").innerText = "Duck"
}
else {
  document.getElementById("duckgif").src = "duck.gif";
  document.getElementById("changegif").innerText = "Beter"
}
}
