/* Smooth Scrolling for Internal Anchor Links */

export default () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href').replace('/?id=', '')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}