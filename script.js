document.addEventListener('DOMContentLoaded', () => {
    const projets = document.querySelectorAll('.projet');

    projets.forEach(projet => {
        projet.addEventListener('mouseenter', () => {
            projet.style.transform = 'scale(1.05)';
            projet.style.transition = 'transform 0.3s ease-in-out';
        });

        projet.addEventListener('mouseleave', () => {
            projet.style.transform = 'scale(1)';
        });
    });
});
