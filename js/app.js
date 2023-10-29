
let text = '';
let attributes = new ElementAttributes('class', 'container');
addElement('div', attributes, text, 'body');

text = '';
attributes = new ElementAttributes('class', 'containerBorder');
addElement('div', attributes, text,'div.container');

text = '';
attributes = new ElementAttributes('id','insertBookBtn');
addElement('button', attributes, text, 'div.containerBorder');

text = '';
attributes = new ElementAttributes('class', 'insertBookDiv');
addElement('div', attributes, text, 'div.containerBorder');

text = '';
attributes = new ElementAttributes('class', 'books');
addElement('div', attributes, text, 'div.containerBorder');
