import createElement from "../common/createElement";

export default function () {
    const ACTIVE_STATE = 'active';

    const $slides = document.querySelectorAll('.js_slide');
    const $togglers = document.querySelectorAll('[data-dir]');
    let $dots = document.querySelector('.js_sliderDots');

    let currentSlideIndex = 0;

    $togglers.forEach(function ($toggler) {
        $toggler.addEventListener('click', onArrow);
    });

    function onArrow(e) {
        e.preventDefault();
        e.stopPropagation();

        const $toggler = this;

        $toggler.setAttribute('disabled', true);

        const direction = $toggler.getAttribute('data-dir');

        let index = currentSlideIndex;

        if (direction === 'next') {
            index++;
        } else {
            index--;
        }

        if (index >= $slides.length) {
            index = 0;
        }

        if (index < 0) {
            index = $slides.length - 1;
        }

        changeSlide(index, direction);

        setTimeout(() => {
            $toggler.removeAttribute('disabled');
        }, 500);
    }

    function changeSlide(index, direction) {
        const $currentSlide = $slides[currentSlideIndex];
        const $nextSlide = $slides[index];
        const dir = direction || (index >= currentSlideIndex ? 'next' : 'prev');

        $slides.forEach($slide => $slide.classList.remove('animHide-next', 'animShow-next', 'animShow-prev', 'animHide-prev'))
        $currentSlide.classList.add('animHide-' + dir);
        $nextSlide.classList.add('animShow-' + dir);

        currentSlideIndex = index;

        if (!$dots) return

        $dots.forEach(($dot, i) => {
            $dot.classList.remove(ACTIVE_STATE);
            if (i === index) $dot.classList.add(ACTIVE_STATE);
        });
    }

    (function dots() {
        if (!$dots) return

        for (let i = 0; i < $slides.length; i++) {
            const $dot = createElement({
                tag: 'button',
                ...(i === 0 ? { classList: ACTIVE_STATE } : {}),
                attr: {
                    type: 'button',
                },
                text: i
            });

            $dots.appendChild($dot);

            $dot.addEventListener('click', function (e) {
                e.stopPropagation();

                changeSlide(i);
            });
        }

        $dots = $dots.querySelectorAll('button');
    })();
}