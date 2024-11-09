document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.addEventListener('mouseover', () => {
            section.style.backgroundColor = '#2a2a2a';
        });
        section.addEventListener('mouseout', () => {
            section.style.backgroundColor = '#3a3a3a';
        });
    });
});
