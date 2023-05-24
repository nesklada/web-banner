import avifWebpBackground from './component/avifWebpBackground';
import js_slide from './component/js_slide';

(function () {
    avifWebpBackground();
    js_slide();

    document.body.addEventListener('click', () => {
        window.href = 'https://www.google.com/q=scroller banner'
    });
})();
