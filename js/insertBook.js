attributes = new ElementAttributes('src','./assets/arrow.png');
addElement('img', attributes, text, 'button#insertBookBtn');

text = 'Insert Book Detail'
attributes = '';
addElement('p', attributes, text, 'button#insertBookBtn');

text = '';
attributes = new ElementAttributes('id', 'insertNewBookForm');
addElement('form', attributes, text, 'div.insertBookDiv');

text = '';
attributes = new ElementAttributes('class', 'insertBookFormDiv1');
addElement('div', attributes, text, 'form#insertNewBookForm');

text = 'Book Name';
attributes = new ElementAttributes('for', 'bookName');
addElement('label', attributes, text, 'div.insertBookFormDiv1');
newInputsForForm('text','bookName','div.insertBookFormDiv1');

text = '';
attributes = new ElementAttributes('class', 'insertBookFormDiv2');
addElement('div', attributes, text, 'form#insertNewBookForm');

text = 'Book Details';
attributes = new ElementAttributes('for', 'bookDetails');
addElement('label', attributes, text, 'div.insertBookFormDiv2');
newInputsForForm('text','bookDetails','div.insertBookFormDiv2');

text = '';
attributes = new ElementAttributes('class', 'insertBookFormDiv3');
addElement('div', attributes, text, 'form#insertNewBookForm');

text = 'Author Name';
attributes = new ElementAttributes('for', 'authorName');
addElement('label', attributes, text, 'div.insertBookFormDiv3');
newInputsForForm('text','authorName','div.insertBookFormDiv3');

text = '';
attributes = new ElementAttributes('class', 'insertBookFormDiv4');
addElement('div', attributes, text, 'form#insertNewBookForm');

text = 'Publish Date';
attributes = new ElementAttributes('for', 'publishDate');
addElement('label', attributes, text, 'div.insertBookFormDiv4');
newInputsForForm('date','publishDate','div.insertBookFormDiv4');

text = '';
attributes = new ElementAttributes('class', 'insertBookFormDiv5');
addElement('div', attributes, text, 'form#insertNewBookForm');

text = 'Price';
attributes = new ElementAttributes('for', 'price');
addElement('label', attributes, text, 'div.insertBookFormDiv5');
newInputsForForm('number','price','div.insertBookFormDiv5');

text = 'Create Book Item';
attributes = '';
addElement('button', attributes, text, 'form#insertNewBookForm');

