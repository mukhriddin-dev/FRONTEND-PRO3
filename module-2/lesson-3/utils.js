function $(selector) {
    if (selector) {
        return document.querySelector(selector)
    }
}

// all elements in the document select

function $$(selector) {
    if (selector) {
        return document.querySelectorAll(selector)
    }
}


// dynamic elements creation functions

function createElement(element, classList, content) {

    let newElement = document.createElement(element);

    if (content) {
        newElement.innerHTML = content
    }


    if (classList) {
        newElement.className = classList
    }


    return newElement;
}
