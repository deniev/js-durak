import DOM from "@core/DOM";

const div = DOM.create('div', {
    id: 1,
    value: 34343
});

document.querySelector('body').appendChild(div.render())