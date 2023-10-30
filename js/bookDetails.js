const tileClicked = (bookTile,book,index) => {

    text = '';
    addElementAfter('div',book.id,text,bookTile);

    text = 'Delete';
    attributes = new ElementAttributes('id', 'deleteBtn');
    addDetailElements('button', attributes, text, book.id);

    bookName(book,index);
    bookDetails(book,index);
    bookPrice(book,index);
    bookDate(book,index);
    bookAuthor(book,index);

    const deleteBtn = document.getElementById('deleteBtn');
    deleteBtn.onclick = () => {
        deleteBook(index);
    }

}


const bookName = (book,index) => {

    text = '';
    attributes = new ElementAttributes('class', `bookNameDetail-${index}`);
    addDetailElements('div', attributes, text, book.id);
    text = 'Book Name';
    attributes = '';
    addElement('span', attributes, text, `div.bookNameDetail-${index}`);
    text = `${book.name}`;
    attributes = new ElementAttributes('class', `name-${index}`);
    addElement('p', attributes, text, `div.bookNameDetail-${index}`);

    inputForUpdate('text', `nameUpdate-${index}`, book.name, `div.bookNameDetail-${index}`);

    const name = document.querySelector(`p.name-${index}`);
    const input = document.querySelector(`input#nameUpdate-${index}`);

    name.onclick = () => {

        clickDetailElements(name, input);
        
    }

    input.onblur = (e) => {
        
        input.setAttribute('style', 'display: none');
        name.removeAttribute('style');
        name.innerText = e.target.value;
        book.name = e.target.value;
        
        updateBook(index, book);
        
    }

}

const bookDetails = (book,index) => {

    text = '';
    attributes = new ElementAttributes('class', `bookDetailsDetail-${index}`);
    addDetailElements('div', attributes, text, book.id);
    text = 'Book Details';
    attributes = '';
    addElement('span', attributes, text, `div.bookDetailsDetail-${index}`);
    text = `${book.details}`;
    attributes = new ElementAttributes('class', `details-${index}`);
    addElement('p', attributes, text, `div.bookDetailsDetail-${index}`);

    inputForUpdate('text', `detailsUpdate-${index}`, book.details, `div.bookDetailsDetail-${index}`);

    const details = document.querySelector(`p.details-${index}`);
    const input = document.querySelector(`input#detailsUpdate-${index}`);

    details.onclick = () => {

        clickDetailElements(details, input);
        
    }

    input.onblur = (e) => {
        
        input.setAttribute('style', 'display: none');
        details.removeAttribute('style');
        details.innerText = e.target.value;
        book.details = e.target.value;
        
        updateBook(index, book);
        
    }

}

const bookAuthor = (book,index) => {

    text = '';
    attributes = new ElementAttributes('class', `bookAuthorDetail-${index}`);
    addDetailElements('div', attributes, text, book.id);
    text = 'Author';
    attributes = '';
    addElement('span', attributes, text, `div.bookAuthorDetail-${index}`);
    text = `${book.author}`;
    attributes = new ElementAttributes('class', `author-${index}`);
    addElement('p', attributes, text, `div.bookAuthorDetail-${index}`);

    inputForUpdate('text', `authorUpdate-${index}`, book.author, `div.bookAuthorDetail-${index}`);

    const author = document.querySelector(`p.author-${index}`);
    const input = document.querySelector(`input#authorUpdate-${index}`);

    author.onclick = () => {

        clickDetailElements(author, input);
        
    }

    input.onblur = (e) => {
        
        input.setAttribute('style', 'display: none');
        author.removeAttribute('style');
        author.innerText = e.target.value;
        book.author = e.target.value;
        
        updateBook(index, book);
        
    }

}

const bookPrice = (book,index) => {

    text = '';
    attributes = new ElementAttributes('class', `bookPriceDetail-${index}`);
    addDetailElements('div', attributes, text, book.id);
    text = 'Price';
    attributes = '';
    addElement('span', attributes, text, `div.bookPriceDetail-${index}`);
    text = `${book.price}`;
    attributes = new ElementAttributes('class', `price-${index}`);
    addElement('p', attributes, text, `div.bookPriceDetail-${index}`);

    inputForUpdate('number', `priceUpdate-${index}`, book.price, `div.bookPriceDetail-${index}`);

    const price = document.querySelector(`p.price-${index}`);
    const input = document.querySelector(`input#priceUpdate-${index}`);

    price.onclick = () => {

        clickDetailElements(price, input);
        
    }

    input.onblur = (e) => {
        
        input.setAttribute('style', 'display: none');
        price.removeAttribute('style');
        price.innerText = e.target.value;
        book.price = e.target.value;
        
        updateBook(index, book);
        
    }

}

const bookDate = (book,index) => {

    text = '';
    attributes = new ElementAttributes('class', `bookDateDetail-${index}`);
    addDetailElements('div', attributes, text, book.id);
    text = 'Publish Date';
    attributes = '';
    addElement('span', attributes, text, `div.bookDateDetail-${index}`);
    text = `${moment(book.date).format('DD/MM/YYYY')}`;
    attributes = new ElementAttributes('class', `date-${index}`);
    addElement('p', attributes, text, `div.bookDateDetail-${index}`);

    inputForUpdate('date', `dateUpdate-${index}`, book.date, `div.bookDateDetail-${index}`);

    const date = document.querySelector(`p.date-${index}`);
    const input = document.querySelector(`input#dateUpdate-${index}`);

    date.onclick = () => {

        clickDetailElements(date, input);
        
    }

    input.onblur = (e) => {
        
        input.setAttribute('style', 'display: none');
        date.removeAttribute('style');
        date.innerText = moment(e.target.value).format('DD/MM/YYYY');
        book.date = e.target.value;
        
        updateBook(index, book);
        
    }

}

