// BOOK's CONSTRUCTOR
const Book = (title, pages, author, state) => {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.state = state;
};

//  BOOK METHOD TO GET THE ALL BOOK INFORMATION
Book.prototype.getInfo = () => `${this.title} by ${this.author} has ${this.pages} pages`;

// FUCNTION TO CREATE A NEW BOOK
const createNewBook = (title, author, pages, state) => {
  // USING BOOK PROTOTYPE TO CREATE NEW BOOKS
  const newBook = Object.create(Book.prototype);
  newBook.title = title;
  newBook.author = author;
  newBook.pages = pages;
  newBook.state = state;

  return newBook;
};

const books = [];
// FUNCTION TO ADD NEW BOOK ON THE LIBRARY
const addNewBook = (book) => {
  books.push(book);
};

addNewBook((createNewBook('Start With  Why', 'Simom Sneck', 234, 'Not Readed')));
addNewBook((createNewBook('Como Fazer Amigos e Influenciar Pessoas', 'Dale Carnige', 154, ' Readed')));

console.log(`You have ${books.length} books in your library`);
console.log('===========================================');
books.map((book, index) => console.log(`${index + 1} - ${book.getInfo()}`));
