const {browser, by, element, $} = require('protractor');

// Helper class for any fancy navigation on browser.
class CustomNavigation {

    constructor(){
        this.tags = ['section', 'div', 'a', 'img', 'label', 'select', 'input', 'button', 'ul', 'li', 'span'];
        this.attributes = [ 'name', 'value', 'type', 'class','title', 'href', 'src', 'alt', 'data'];
    }

    async goTo(url){
        if(!url.includes('.com'))
            url = url + '.com';

        if(!url.includes('www.'))
            url = 'www.'+ url;

        if(!url.includes('http'))
            url = 'https://' + url;

        await browser.get(url);
    }

    enableCursor() {
        browser.executeScript("let seleniumFollowerImg = document.createElement('img');"
            + "seleniumFollowerImg.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAQAAACGG/bgAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAAHsYAAB7GAZEt8iwAAAAHdElNRQfgAwgMIwdxU/i7AAABZklEQVQ4y43TsU4UURSH8W+XmYwkS2I09CRKpKGhsvIJjG9giQmliHFZlkUIGnEF7KTiCagpsYHWhoTQaiUUxLixYZb5KAAZZhbunu7O/PKfe+fcA+/pqwb4DuximEqXhT4iI8dMpBWEsWsuGYdpZFttiLSSgTvhZ1W/SvfO1CvYdV1kPghV68a30zzUWZH5pBqEui7dnqlFmLoq0gxC1XfGZdoLal2kea8ahLoqKXNAJQBT2yJzwUTVt0bS6ANqy1gaVCEq/oVTtjji4hQVhhnlYBH4WIJV9vlkXLm+10R8oJb79Jl1j9UdazJRGpkrmNkSF9SOz2T71s7MSIfD2lmmfjGSRz3hK8l4w1P+bah/HJLN0sys2JSMZQB+jKo6KSc8vLlLn5ikzF4268Wg2+pPOWW6ONcpr3PrXy9VfS473M/D7H+TLmrqsXtOGctvxvMv2oVNP+Av0uHbzbxyJaywyUjx8TlnPY2YxqkDdAAAAABJRU5ErkJggg==');"
            + "seleniumFollowerImg.setAttribute('id', 'selenium_mouse_follower');seleniumFollowerImg.setAttribute('style', 'position: absolute; z-index: 99999999999; pointer-events: none; left:0; top:0');"
            + "document.body.appendChild(seleniumFollowerImg);document.onmousemove = function (e) {document.getElementById('selenium_mouse_follower').style.left = e.pageX;document.getElementById('selenium_mouse_follower').style.top = e.pageY};"
        );
    };

    scrollIntoView(block){
        browser.executeScript('arguments[0].scrollIntoView(true)', block.getWebElement());
    }

    async getInputElement(
        text,
        tags = ['input', 'select', 'button'],
        attributes = this.attributes
    ){
        let block;
        for (const tag of tags) {
            for (const attribute of attributes) {
                block = $(tag + '[' + attribute + '="' + text + '"]');
                if (await browser.isElementPresent(block)) {
                    this.scrollIntoView(block);
                    return block;
                }
            }
        }

        throw Error("input " + text + " was not found.");
    }

    async getElement(
        text,
        tags = this.tags,
        attributes = this.attributes
    ) {
        let block = element(by.id(text));
        if (await browser.isElementPresent(block)) {
            return block;
        }
        await this.findElement(text, tags, attributes);
    }

    async findElement(
        text,
        tags = this.tags,
        attributes = this.attributes
    ) {
        let block;
        for (const tag of tags) {
            for (const attribute of attributes) {
                block = $(tag + '[' + attribute + '*="' + text + '"]');
                if (await browser.isElementPresent(block)) {
                    this.scrollIntoView(block);
                    return block;
                }
            }
        }

        throw Error("Element " + text + " was not found.");
    }
}

module.exports = new CustomNavigation();