text = 'Books List';
attributes = '';
addElement('h1', attributes, text, 'div.books'); 

text = '';
attributes = new ElementAttributes('class', 'booksList');
addElement('div', attributes, text, 'div.books'); 

const getBookList = () => {
    const books = JSON.parse(localStorage.getItem('books'));

    if(books === null || books.length === 0) {
        
        const bookList = document.querySelector('div.booksList');
        bookList.innerHTML = '';

        text = 'No Books Available';
        attributes = new ElementAttributes('class', `noBookAvailable`);
        addElement('h3', attributes, text, 'div.booksList');

    }
    else {

        const bookList = document.querySelector('div.booksList');
        bookList.innerHTML = '';
        books.forEach((book,index)=>{

            renderBooksLoop(book,index);

        });

    }

};  

getBookList();


