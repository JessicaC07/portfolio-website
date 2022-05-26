const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
        } 
    })
})

document.querySelectorAll('.scroll-animation').forEach(element => {
    observer.observe(element);
});