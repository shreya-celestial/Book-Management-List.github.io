const clickDetailElements = (element, input) => {
    element.setAttribute('style', 'display: none');
    input.removeAttribute('style');
};

const getDeletePopUp = (book, index) => {
    text = '';
    attibutes = new ElementAttributes('class', 'deletePopup');
    addElementAfter('div', attibutes, text, `button#deleteBtn-${book.id}`);
    text = '';
    attibutes = new ElementAttributes('class', 'deleteBox');
    addElementAfter('div', attibutes, text, 'div.deletePopup');
    text = "You are deleting the following book:";
    attributes = '';
    addElement('p', attributes, text, 'div.deleteBox');
    let headerText = `${book.name}`;
    attributes = '';
    addElement('h3', attributes, headerText, 'div.deleteBox');
    text = `Ok`;
    attributes = new ElementAttributes('id', 'deleteBookBtn');
    addElement('button', attributes, text, 'div.deleteBox');

    document.querySelector('div.deletePopup').onclick = () => {
        removeElement('div.deleteBox');
        removeElement('div.deletePopup');
    };

    document.querySelector('button#deleteBookBtn').onclick = () => {
        deleteBook(index);
    };
};