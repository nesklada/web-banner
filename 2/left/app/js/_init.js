import avifWebpBackground from './component/avifWebpBackground';
import js_slide from './component/js_slide';

(function () {
    avifWebpBackground();
    js_slide();

    document.body.addEventListener('click', () => {
        window.open('https://www.google.com/search?q=Left banner');
    });

    setTimeout(() => {
        const target = 'data-anim-immediately';
        const $targetImmediatelyAnimation = document.querySelector(`[${target}]`);

        if (!$targetImmediatelyAnimation) return

        $targetImmediatelyAnimation.removeAttribute(target);
    }, 500);
})();
