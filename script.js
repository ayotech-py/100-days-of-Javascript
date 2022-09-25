
function bgrChange() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    
    var button = document.getElementById("bgr-change")

    if (button.style.textAlign === 'right') {
        button.style.textAlign = 'left';
    } else {
        button.style.textAlign = 'right'
    }
}