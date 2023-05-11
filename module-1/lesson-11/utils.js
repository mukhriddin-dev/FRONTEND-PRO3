function $(selector) {
    if (selector) {
        return document.querySelector(selector)
    }
}

function $$(selector) {
    if (selector) {
        return document.querySelectorAll(selector)
    }

}
