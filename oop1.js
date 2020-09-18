//object literal

const book1 = {
    title : 'book one',
    author : 'john doe',
    year : '2013',
    getSummary : function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

const book2 = {
    title : 'book two',
    author : 'john doe',
    year : '2013',
    getSummary : function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

console.log(book1.getSummary());
console.log(Object.keys(book1));
console.log(Object.values(book1));

