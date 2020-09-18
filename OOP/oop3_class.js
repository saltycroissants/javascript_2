//ES6에서부터 사용

class Book{
    constructor(title, author, year){
        this.title = title; 
        this.author = author;
        this.year = year;
    }

    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    //before instantiation
    static bookStore(){
        return '교보문고';
    }
}

//Instantiate object 초기화
const book1 = new Book('Book one', 'John Doe','2013');
console.log(book1);

//static 출력
console.log(Book.bookStore());