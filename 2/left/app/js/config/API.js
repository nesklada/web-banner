import { EVENT_CHANGE_SLIDE, EVENT_CHANGE_SLIDE_KEY } from "../component/js_slide";

export default function initPostMessages() {
    document.addEventListener(EVENT_CHANGE_SLIDE, ({ detail }) => {
        const message = {
            WBFSH_slideIndex: detail[EVENT_CHANGE_SLIDE_KEY]
        }

        parent.window.postMessage(JSON.stringify(message), '*');
    });
}