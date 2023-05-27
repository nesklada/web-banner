import avifWebpBackground from './component/avifWebpBackground';
import js_slide from './component/js_slide';
import initPostMessages from './config/API';

(function () {
    avifWebpBackground();
    js_slide();
    initPostMessages();

    document.body.addEventListener('click', () => {
        window.open('https://www.google.com/search?q=Left banner');
    });
})();
