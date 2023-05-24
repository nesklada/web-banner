export default function () {
    const $togglers = document.querySelectorAll('.js_slideToggler');
    const $slides = document.querySelectorAll('.js_slide');

    let slideIndex = 0;

    $togglers.forEach(function ($toggler) {
        $toggler.addEventListener('click', onClick);
    });

    function onClick(e) {
        e.preventDefault();
        e.stopPropagation();

        const $toggler = this;

        $toggler.setAttribute('disabled', true);

        const direction = $toggler.getAttribute('data-dir');
        const $currentSlide = $slides[slideIndex];

        if (direction === 'next') {
            slideIndex++;
        } else {
            slideIndex--;
        }

        if (slideIndex >= $slides.length) {
            slideIndex = 0;
        }

        if (slideIndex < 0) {
            slideIndex = $slides.length - 1;
        }

        const $nextSlide = $slides[slideIndex];

        $slides.forEach($slide => $slide.classList.remove('animHide-next', 'animShow-next', 'animShow-prev', 'animHide-prev'))
        $currentSlide.classList.add('animHide-' + direction);
        $nextSlide.classList.add('animShow-' + direction);

        setTimeout(() => {
            $toggler.removeAttribute('disabled');
        }, 500);
    }
}