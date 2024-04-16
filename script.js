var siteWidth = 1280;
var scale = screen.width /siteWidth

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');

var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
 acc[i].addEventListener("click", function() {
   var panel = this.nextElementSibling;
   if (panel.style.display === "block") {
     panel.style.display = "none";
   } else {
     panel.style.display = "block";
   }
 });
}
