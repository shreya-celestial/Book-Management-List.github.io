let count = 0;
const clickInsertBookBtn = () => {
    if(count===0 || count%2===0)
    {
        insertBookBtn.children[0].style.transform = 'rotate(90deg)';
        insertBookDiv.removeAttribute('style');
    }
    else
    {
        insertBookBtn.children[0].style.transform = 'rotate(0deg)';
        insertBookDiv.setAttribute('style', 'display: none');
    }
    count++;
};

const submitNewBookForm = (e) => {
    e.preventDefault();
    const book = {
        id : uuid.v4(),
        name: e.target.elements.bookName.value,
        details: e.target.elements.bookDetails.value,
        author: e.target.elements.authorName.value,
        date: e.target.elements.publishDate.value,
        price: e.target.elements.price.value
    };
    books.push(book);
    e.target.elements.bookName.value = '';
    e.target.elements.bookDetails.value = '';
    e.target.elements.authorName.value = '';
    e.target.elements.publishDate.value = '';
    e.target.elements.price.value = '';

    localStorage.setItem('books',JSON.stringify(books));
    insertBookDiv.setAttribute('style', 'display: none');
    insertBookBtn.children[0].style.transform = 'rotate(0deg)';
    count++;
};
