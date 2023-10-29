
const tileClicked = (bookTile,book,ind) => {

    text = '';
    addElementAfter('div',book.id,text,bookTile);

    text = 'Delete';
    attributes = new ElementAttributes('id', 'deleteBtn');
    addDetailElements('button', attributes, text, book.id);

    bookName(book,ind);
    bookDetails(book,ind);
    bookPrice(book,ind);
    bookDate(book,ind);
    bookAuthor(book,ind);

    const deleteBtn = document.getElementById('deleteBtn');
    deleteBtn.onclick = () => {
        deleteBook(ind);
    }

}


const bookName = (book,ind) => {

    text = '';
    attributes = new ElementAttributes('class', `bookNameDetail-${ind}`);
    addDetailElements('div', attributes, text, book.id);
    text = 'Book Name';
    attributes = '';
    addElement('span', attributes, text, `div.bookNameDetail-${ind}`);
    text = `${book.name}`;
    attributes = new ElementAttributes('class', `name-${ind}`);
    addElement('p', attributes, text, `div.bookNameDetail-${ind}`);

    inputForUpdate('text', `nameUpdate-${ind}`, book.name, `div.bookNameDetail-${ind}`);

    const name = document.querySelector(`p.name-${ind}`);
    const input = document.querySelector(`input#nameUpdate-${ind}`);

    name.onclick = () => {

        name.setAttribute('style', 'display: none');
        input.removeAttribute('style');
        
    }

    input.onblur = (e) => {
        
        input.setAttribute('style', 'display: none');
        name.removeAttribute('style');
        name.innerText = e.target.value;
        book.name = e.target.value;
        
        updateBook(ind, book);
        
    }

}

const bookDetails = (book,ind) => {

    text = '';
    attributes = new ElementAttributes('class', `bookDetailsDetail-${ind}`);
    addDetailElements('div', attributes, text, book.id);
    text = 'Book Details';
    attributes = '';
    addElement('span', attributes, text, `div.bookDetailsDetail-${ind}`);
    text = `${book.details}`;
    attributes = new ElementAttributes('class', `details-${ind}`);
    addElement('p', attributes, text, `div.bookDetailsDetail-${ind}`);

    inputForUpdate('text', `detailsUpdate-${ind}`, book.details, `div.bookDetailsDetail-${ind}`);

    const details = document.querySelector(`p.details-${ind}`);
    const input = document.querySelector(`input#detailsUpdate-${ind}`);

    details.onclick = () => {

        details.setAttribute('style', 'display: none');
        input.removeAttribute('style');
        
    }

    input.onblur = (e) => {
        
        input.setAttribute('style', 'display: none');
        details.removeAttribute('style');
        details.innerText = e.target.value;
        book.details = e.target.value;
        
        updateBook(ind, book);
        
    }

}

const bookAuthor = (book,ind) => {

    text = '';
    attributes = new ElementAttributes('class', `bookAuthorDetail-${ind}`);
    addDetailElements('div', attributes, text, book.id);
    text = 'Author';
    attributes = '';
    addElement('span', attributes, text, `div.bookAuthorDetail-${ind}`);
    text = `${book.author}`;
    attributes = new ElementAttributes('class', `author-${ind}`);
    addElement('p', attributes, text, `div.bookAuthorDetail-${ind}`);

    inputForUpdate('text', `authorUpdate-${ind}`, book.author, `div.bookAuthorDetail-${ind}`);

    const author = document.querySelector(`p.author-${ind}`);
    const input = document.querySelector(`input#authorUpdate-${ind}`);

    author.onclick = () => {

        author.setAttribute('style', 'display: none');
        input.removeAttribute('style');
        
    }

    input.onblur = (e) => {
        
        input.setAttribute('style', 'display: none');
        author.removeAttribute('style');
        author.innerText = e.target.value;
        book.author = e.target.value;
        
        updateBook(ind, book);
        
    }

}

const bookPrice = (book,ind) => {

    text = '';
    attributes = new ElementAttributes('class', `bookPriceDetail-${ind}`);
    addDetailElements('div', attributes, text, book.id);
    text = 'Price';
    attributes = '';
    addElement('span', attributes, text, `div.bookPriceDetail-${ind}`);
    text = `${book.price}`;
    attributes = new ElementAttributes('class', `price-${ind}`);
    addElement('p', attributes, text, `div.bookPriceDetail-${ind}`);

    inputForUpdate('number', `priceUpdate-${ind}`, book.price, `div.bookPriceDetail-${ind}`);

    const price = document.querySelector(`p.price-${ind}`);
    const input = document.querySelector(`input#priceUpdate-${ind}`);

    price.onclick = () => {

        price.setAttribute('style', 'display: none');
        input.removeAttribute('style');
        
    }

    input.onblur = (e) => {
        
        input.setAttribute('style', 'display: none');
        price.removeAttribute('style');
        price.innerText = e.target.value;
        book.price = e.target.value;
        
        updateBook(ind, book);
        
    }

}

const bookDate = (book,ind) => {

    text = '';
    attributes = new ElementAttributes('class', `bookDateDetail-${ind}`);
    addDetailElements('div', attributes, text, book.id);
    text = 'Publish Date';
    attributes = '';
    addElement('span', attributes, text, `div.bookDateDetail-${ind}`);
    text = `${moment(book.date).format('DD/MM/YYYY')}`;
    attributes = new ElementAttributes('class', `date-${ind}`);
    addElement('p', attributes, text, `div.bookDateDetail-${ind}`);

    inputForUpdate('date', `dateUpdate-${ind}`, book.date, `div.bookDateDetail-${ind}`);

    const date = document.querySelector(`p.date-${ind}`);
    const input = document.querySelector(`input#dateUpdate-${ind}`);

    date.onclick = () => {

        date.setAttribute('style', 'display: none');
        input.removeAttribute('style');
        
    }

    input.onblur = (e) => {
        
        input.setAttribute('style', 'display: none');
        date.removeAttribute('style');
        date.innerText = moment(e.target.value).format('DD/MM/YYYY');
        book.date = e.target.value;
        
        updateBook(ind, book);
        
    }

}

