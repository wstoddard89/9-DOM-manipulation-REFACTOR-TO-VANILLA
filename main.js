
//document.addEventListener('DOMContentLoaded', function() {



// const accordionItemHeader = document.querySelectorAll(".accordion-item-header");

const accordionItems = document.querySelectorAll(".accordion-item")


for (let i = 0; i < accordionItems.length; i++) {
  let element = accordionItems[i]
  element.addEventListener('click', function(e) {
    const accordionContent = document.querySelectorAll(".accordion-item-pgraph");
    for (let i = 0; i < accordionContent.length; i++) {
      
      let element = accordionContent[i]
      element.classList.remove('active')
  }

    e.preventDefault()
    const currentContent = element.querySelectorAll(".accordion-item-pgraph")[0]
    currentContent.classList.add('active')
    
  }) 
}



// function toggle(event) {
//  for (var i = 0; i < accordionContent.length; i++) {
// console.log(accordionContent[i]);
// let element = accordionContent[i]
// element.classList.remove('accordion-item-pgraph')
//  }
// }

//})
