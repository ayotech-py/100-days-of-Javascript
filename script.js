
function bgrChange() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    
    var button = document.getElementById("bgr-change")

    if (button.style.textAlign === 'right') {
        button.style.textAlign = 'left';
    } else {
        button.style.textAlign = 'right';
    }
}

function counterPlus() {
    count = document.getElementById("count").innerHTML;
    document.getElementById("count").innerHTML = parseInt(count) + 1;
}

function counterMinus() {
    count = document.getElementById("count").innerHTML;
    document.getElementById("count").innerHTML = parseInt(count) - 1;
}