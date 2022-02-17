
import React, {useState, useEffect} from 'react';
import * as BooksAPI from '../BooksAPI';
import {Link} from "react-router-dom";
import Book from './Book';


// In my first submission comments, you recommend I have to use PRETTIER to fix all of spacing null but I can't use it because I've been working in Udacity Workspace. So I did it manually
const Search = () => {
  
   const [books, setBooks] = useState([])
     const [searchBook, setSearchBook] = useState([])
    const [searchWord, setSearchWord] = useState("") //
 
    const updateBookShelft = (book, toWhere) =>{
  
             const updateBooks = books.map(b => {

               if(b.id===book.id){
                    book.shelf = toWhere
                 return book
               } else{
                 return b
               }

             })

             BooksAPI.update(book, toWhere);
             setBooks(updateBooks);
   }
  
  useEffect(() =>{
    BooksAPI.getAll()
    .then(data => 
        
          setBooks(data)
          
      );
  
  }, [])
 
   useEffect(() =>{
     
     let confirm = true;
     
     if(searchWord){ //prevents SEARCHWORD from being undefined, because it enters a function where it is TRUE
         BooksAPI.search(searchWord).then(data =>{
             if(data.error){
                setSearchBook([])        
             } else {
              
               if(confirm) {
                 //Compare books that are stored on shelves with the books they search in the SEARCH ENGINE
                 let comparedBooks = data.map(e => {
                 let findedBook = books.find(b => b.id === e.id);
                 
                   if(findedBook) { // if the book exists return the findeBook
                     return findedBook;
                   } else {
                     
                     return e;
                     
                   }
                 })
                 setSearchBook(comparedBooks);               
               }
             }
          
         })
     }
   
     return() => { // This indicates what to do after you have finished the conditionals and terminate the userEffect
       confirm= false;
        
      setSearchBook([])
           
     }
   }, [searchWord]) //Here is the searchWod because every time a word is written in the search engine the request will be sent to the API
  

  return(
 			 <div className="search-books">
            <div className="search-books-bar">
				<Link to="/">
              		<button className="close-search" > Close </button>
				</Link>
              <div className="search-books-input-wrapper">
              
                <input type="text" placeholder="Search by title or author" value={searchWord} onChange={(e) => setSearchWord(e.target.value)} />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
			{
    
              searchBook.map((b)=> 
        					<li key={b.id}>
                        	<Book 
							books={b} 
							updateBookShelft={updateBookShelft} 
   							currentShelf={b.shelf} 
   							title={b.title} 
   							author={b.authors ? b.authors.join(', ') : 'N/A' }
		    	 			cover={b.imageLinks ? b.imageLinks.thumbnail : 'N/A'}
								/>
                      		</li>
       					 )}                    
				</ol>					
            </div>              
          </div>
  )
}

export default Search;