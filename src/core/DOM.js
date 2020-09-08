import { isArray, each, isObject } from 'lodash';

export default class DOM
{
    constructor(selector)
    {
        if (this.isDomElement(selector)) {
            this.element = selector;
        } else {
            this.element = this.get(selector);
        }
    }

    isDomElement(element)
    {
        return isObject(element) && element.nodeType === Node.ELEMENT_NODE;
    }

    get(selector)
    {
        const element = document.querySelector(selector);

        if (! element || element.nodeType !== Node.ELEMENT_NODE) {
            throw new Error('NE');
        }

        return element;
    }

    on(listener, cb = () => {})
    {
        this.element.addEventListener(listener, cb);
    }

    static create(selector, options = {})
    {
        const element = document.createElement(selector);

        if (isObject(options)) {
            each(options, (value, attribute) => {
                element.setAttribute(attribute, value);
            });
        }

        return new DOM(element);
    }

    html(data)
    {
        if (isArray(data)) {
            return each(data, html => {
                return this.html(html)
            })
        }

        return this.element.insertAdjacentHTML('afterend', data);
    }

    render()
    {
        return this.element;
    }
}