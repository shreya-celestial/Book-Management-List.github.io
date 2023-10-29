
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
        books.forEach((book,ind)=>{

            let count = 0;

            text = '';
            attributes = new ElementAttributes('class', `bookTile-${ind}`);
            addElement('div', attributes, text, 'div.booksList'); 

            attributes = new ElementAttributes('src', './assets/bookArrow.png');
            addElement('img', attributes, text, `div.bookTile-${ind}`);

            text  = `${book.name} by ${book.author}`;
            attributes = '';
            addElement('p', attributes, text, `div.bookTile-${ind}`);

            const bookTile = document.querySelector(`div.bookTile-${ind}`);

            bookTile.onclick = () => {
                
                if(count==0 || count%2==0)
                {
                    tileClicked(bookTile,book,ind);
                    bookTile.children[0].style.transform = 'rotate(90deg)';
                }
                else
                {
                    removeTile(book.id);
                    bookTile.children[0].style.transform = 'rotate(0deg)'
                    location.reload();
                }
                count++;

            }

        })

    }

}  

getBookList();


