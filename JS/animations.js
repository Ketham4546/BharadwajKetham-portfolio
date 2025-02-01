// Example JavaScript for smooth scrolling
document.querySelector('.skills-container').addEventListener('wheel', (event) => {
    event.preventDefault();
    document.querySelector('.skills-container').scrollLeft += event.deltaY;
});
