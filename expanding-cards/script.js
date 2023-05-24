// Puts all the panels in a node list (similar to an array), you can loop through a node list
const panels = document.querySelectorAll('.panel');

panels.forEach((item) => {
    item.addEventListener('click', () => {
        removeActiveClasses();
        item.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach((item) => {
        item.classList.remove('active');
    })
}