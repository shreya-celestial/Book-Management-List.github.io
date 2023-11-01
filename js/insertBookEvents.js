const insertBookBtn = document.querySelector('button#insertBookBtn');
const insertBookDiv = document.querySelector('div.insertBookDiv');
const insertBookForm = document.querySelector('form#insertNewBookForm');

insertBookDiv.setAttribute('style', 'display: none');
let books;
if(localStorage.getItem('books') === null)
{
    books = [];
}
else
{
    books = JSON.parse(localStorage.getItem('books'));
}
insertBookBtn.onclick = () => {
    clickInsertBookBtn();
};
insertBookForm.onsubmit = (e) => {
    submitNewBookForm(e);
    getBookList();
};


