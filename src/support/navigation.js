import {browser, by, element} from "protractor";

// Helper class for any fancy navigation on the page.
class Navigation{
    tags = ['section' , 'div', 'a', 'img', 'label', 'select', 'input', 'button', 'ul', 'li', 'span'];
    attributes = ['type', 'value', 'title', 'href','src', 'alt'];

    static getElement(text){
        let block = element(by.id(text));
        if(block.isDisplayed()){
            return block;
        }


    }
}

module.exports = new Navigation();