const lib = new Library()


const formEl=document.forms.bookForm;

formEl.addEventListener("submit", (e) => {

    e.preventDefault()
    
    const bookTitleEl= formEl.elements.bookTitle.value.trim();
    const bookAuthorEl= formEl.elements.bookAuthor.value.trim();


    if(bookTitleEl && bookAuthorEl){
        
        const book1= new Book(bookTitleEl, bookAuthorEl)
        lib.addBook(book1)
    
        console.log(lib.books)


        renderLibrary()

        formEl.reset()

        
    }

})



//const removeBtn=document.getElementsByName("removeBtn")

function markAsBook(index) {
    lib.getbooks()[index].markAsRead();
    renderLibrary();
}
function removeBook(index){

    lib.removeBook(index);
    renderLibrary();

}


function renderLibrary() {

    const renderedLibEl=document.getElementById("renderedLibrary");
    const bookCountEl=document.getElementById("bookCount")

    bookCountEl.innerText=lib.bookCount();

    renderedLibEl.innerHTML=''
    
    lib.getbooks().forEach((book,index) => {

        renderedLibEl.innerHTML +=`
    <li class="li">
        <div class="${book.isRead() ? "line-through" : ''}">
            ${book.getTitle()} by ${book.getAuthor()}
        </div>
        <div id="btns" class="space-x-2">
             <button id="markBtn" class="markBtn py-1 px-3 rounded bg-green-400 text-sm font-semibold text-white" onclick="markAsBook(${index})">Mark as Read</button>
            <button id="removeBtn" class="py-1 px-3 rounded bg-red-400 text-white text-sm font-semibold" onclick="removeBook(${index})">Remove</button>
        </div>
    </li>
    `

    });


//     const markBtn=document.querySelectorAll("#markBtn")

// markBtn.forEach(btn => {
//     btn.addEventListener("click", (e) => {
//         console.log(e.target)
//         const index=e.target.getAttribute('data-index');
//         lib.getbooks()[index].markAsRead();
//         renderLibrary();
//     })
// })

    
}