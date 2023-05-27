export default function () {
    const ACTIVE_STATE = 'active';

    const $slides = document.querySelectorAll('.js_slide');

    window.addEventListener("message", function (event) {
        if (!event?.data) return;

        try {
            const obj = JSON.parse(event.data || {});
            const index = obj.WBFSH_slideIndex;

            changeSlide(index);
        } catch (e) {
            console.log(e)
        }

    }, false);

    function changeSlide(index = -1) {
        if (index < 0 || index >= $slides.length) return;

        $slides.forEach($slide => $slide.classList.remove(ACTIVE_STATE));

        $slides[index].classList.add(ACTIVE_STATE)
    }
}
