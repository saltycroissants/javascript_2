//constructor

function Book(title, author, year){
    console.log('Book Initialized');
    this.title = title;
    this.author = author;
    this.year = year;

}

//Instatiate an Object
const book1 = new Book('Book one', 'john doe','2013');
const book2 = new Book('Book one', 'john doe','2013');
console.log(book1.title);

//get summary -> prototype
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

console.log(book2.getSummary());