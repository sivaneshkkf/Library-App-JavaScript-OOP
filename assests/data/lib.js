class Library {
    constructor(){
        this.books= []
    }

    addBook(book) {

        this.books.push(book)
        //console.log(book);
        
    }

    getbooks(){
        return this.books
    }

    bookCount() {
        return this.books.length
    }
    removeBook(index){
        if(index>=0 && index < this.books.length){
            
            this.books.splice(index,1);
        }
    }
}