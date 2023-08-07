// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 21 || document.documentElement.scrollTop > 21) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//////////////////////////////////////////////////

// // slider1
// var slider = document.getElementById("slider");
// var slide = slider.getElementsByClassName("slide");
// function next() {
//   slider.append(slide[0]);
// }
// function prev() {
//   slider.prepend(slide[slide.length - 1]);
// }

// //slidder2
// var slider1 = document.getElementById("slider1");
// var slide1 = slider1.getElementsByClassName("slide1");
// function next() {
//   slider1.append(slide1[0]);
// }
// function prev() {
//   slider1.prepend(slide1[slide1.length - 1]);
// }

// //slider3
// var slider2 = document.getElementById("slider2");
// var slide2 = slider.getElementsByClassName("slide2");
// function next() {
//   slider2.append(slide2[0]);
// }
// function prev() {
//   slider2.prepend(slide2[slide2.length - 1]);
// }