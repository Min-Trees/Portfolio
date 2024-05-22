document.addEventListener("DOMContentLoaded", function() {

    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.addEventListener('scroll', () => {
        let top = window.scrollY;

        sections.forEach(section => {
            let offset = section.offsetTop - 150;
            let height = section.offsetHeight;
            let id = section.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            }
        });

        let header = document.querySelector('.header');
        header.classList.toggle('sticky', top > 100);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('.animated-text');
    const text = textElement.textContent;
    textElement.innerHTML = '';

    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.setProperty('--delay', `${index * 0.1}s`);
        textElement.appendChild(span);
    });
});
