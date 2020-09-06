function showText1() {
  document.querySelector("#par1").style.display = "block";
  document.querySelector("#par2").style.display = "none";
  document.querySelector("#par3").style.display = "none";
}

function showText2() {
  document.querySelector("#par2").style.display = "block";
  document.querySelector("#par1").style.display = "none";
  document.querySelector("#par3").style.display = "none";
}

function showText3() {
  document.querySelector("#par3").style.display = "block";
  document.querySelector("#par1").style.display = "none";
  document.querySelector("#par2").style.display = "none";
}

// function showSlowly1() {
//   document.querySelector('#par1').toggleClass = "showSlowly1";
// }

// let par1 = document.querySelector("#par1");
// let heading1 = document.querySelector("#heading1")

// heading1.addEventListener('click', function() {
//   par1.className = par1.className !== 'show' ? 'show' : 'hide';
//   if (par1.className === 'show') {
//     par1.style.display = 'block';
//     window.setTimeout(function(){
//       par1.style.opacity = 1;
//       par1.style.transform = 'scale(1)';
//     },0);
//   }
//   if (par1.className === 'hide') {
//     par1.style.opacity = 0;
//     par1.style.transform = 'scale(0)';
//     window.setTimeout(function(){
//       par1.style.display = 'none';
//     },700); // timed to match animation-duration
//   }
// })