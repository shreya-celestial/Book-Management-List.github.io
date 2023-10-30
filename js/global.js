const addElement = (elementType, elementAttributes, elementText, elementParent) => {
    const element = document.createElement(`${elementType}`);
    element.setAttribute(`${elementAttributes.type}`, `${elementAttributes.value}`);
    element.innerText = `${elementText}`;
    document.querySelector(`${elementParent}`).appendChild(element);
}

const ElementAttributes = function (type,value) {
    this.type = type;
    this.value = value;
}

const newInputsForForm = (type, name, parentElement) => {
    const element = document.createElement('input');
    element.setAttribute('type', `${type}`);
    element.setAttribute('name', `${name}`);
    element.setAttribute('required', 'true');
    document.querySelector(`${parentElement}`).appendChild(element);
}

const addElementAfter = (elementType, id, elementText, elementParent) => {
    const element = document.createElement(`${elementType}`);
    element.setAttribute('class', 'bookDetails');
    element.setAttribute('id', id);
    element.innerText = `${elementText}`;
    elementParent.after(element);
}

const addDetailElements = (elementType, elementAttributes, elementText, elementParentId) => {
    const element = document.createElement(`${elementType}`);
    element.setAttribute(`${elementAttributes.type}`, `${elementAttributes.value}`);
    element.innerText = `${elementText}`;
    document.getElementById(`${elementParentId}`).appendChild(element);
}

const inputForUpdate = (type, id, value, parentElement) => {
    const element = document.createElement('input');
    element.setAttribute('type', type);
    element.setAttribute('id', id);
    element.setAttribute('value', value);
    element.setAttribute('style', 'display: none');
    document.querySelector(parentElement).appendChild(element);
}

const removeTile = (id) => {
    const element = document.getElementById(id);
    return element.parentNode.removeChild(element);
}

const deleteBook = (index) => {

    const books = JSON.parse(localStorage.getItem('books'));
    books.splice(index,1);
    localStorage.setItem('books',JSON.stringify(books));
    getBookList();

}

const updateBook = (index, book) => {

    const books = JSON.parse(localStorage.getItem('books'));
    books.splice(index,1,book);
    localStorage.setItem('books',JSON.stringify(books));

}
