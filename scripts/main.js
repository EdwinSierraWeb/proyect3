const titles = document.querySelectorAll('.titles');

const observer = new IntersectionObserver( entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('titles11', entry.isIntersecting)
    })
}, {
    rootMargin: "0px 0px 50px 0px",
    threshold: 0,
}
)

titles.forEach(title => {
    observer.observe(title);
});
