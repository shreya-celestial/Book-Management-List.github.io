renderBooksLoop = (book,index) => {
    let count = 0;

    text = '';
    attributes = new ElementAttributes('class', `bookTile-${index}`);
    addElement('div', attributes, text, 'div.booksList'); 

    attributes = new ElementAttributes('src', './assets/bookArrow.png');
    addElement('img', attributes, text, `div.bookTile-${index}`);

    text  = `${book.name} by ${book.author}`;
    attributes = '';
    addElement('p', attributes, text, `div.bookTile-${index}`);

    const bookTile = document.querySelector(`div.bookTile-${index}`);

    bookTile.onclick = () => {
        
        count = clickBookTile(count,bookTile,book,index);

    };
};

clickBookTile = (count,bookTile,book,index) => {
    if(count===0 || count%2===0)
    {
        tileClicked(bookTile,book,index);
        bookTile.children[0].style.transform = 'rotate(90deg)';
    }
    else
    {
        removeTile(book.id);
        bookTile.children[0].style.transform = 'rotate(0deg)';
        location.reload();
    }
    count++;
    return count;
};