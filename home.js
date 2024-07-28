const text = "Software Developer.";
const textElement = document.getElementById('auto-type-profession');
const cursorElement = document.getElementById('cursor');
const typingSpeed = 150;

function typeText(text, textElement, cursorElement, speed) {
    let index = 0;
    function type() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        } else {
            cursorElement.style.display = 'none'; // Esconder el cursor al finalizar
        }
    }
    type();
}

typeText(text, textElement, cursorElement, typingSpeed);