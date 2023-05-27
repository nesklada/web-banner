export default function createElement({
    tag = 'div',
    classList = null,
    attrs = null,
    text = null
} = {}) {
    const element = document.createElement(tag);

    if (classList?.length) {
        if (Array.isArray(classList)) {
            element.classList.add(...classList);
        } else {
            element.classList.add(classList);
        }
    }

    if (attrs && typeof attrs === 'object') {
        Object.keys(attrs).forEach(attr => {
            element.setAttribute(attr, attrs[attr]);
        });
    }

    if (text) {
        element.innerText = text
    }

    return element;
}