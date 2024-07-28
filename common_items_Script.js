// Obtener todos los enlaces del navbar
const links = document.querySelectorAll('.navbar a');

// Añadir un evento de scroll a la ventana
window.addEventListener('scroll', () => {
    let fromTop = window.scrollY;

    links.forEach(link => {
        let section = document.querySelector(link.hash);

        if (section) {
            if (
                section.offsetTop <= fromTop + 60 && // Ajustar para tener en cuenta la altura del navbar
                section.offsetTop + section.offsetHeight > fromTop + 60
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
});
