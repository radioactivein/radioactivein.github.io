const panels = document.querySelectorAll('.edu-card');

panels.forEach(panel => panel.addEventListener('click',()=>{
    removeActiveClasses()
    panel.classList.add('down');
}))

function removeActiveClasses(){
    panels.forEach(panel => panel.classList.remove('down'))
}