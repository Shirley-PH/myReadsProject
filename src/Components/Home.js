import {Link} from "react-router-dom";
import Header from './Header.js'
import * as BooksAPI from '../BooksAPI'
import React, {useState,useEffect} from 'react'
import Shelf from './Shelf'

const Home = () => {
  
  const [books, setBooks] = useState([]);

  const updateBookShelft = (book, whereTo) =>{
  
             const updateBooks = books.map(b => {

               if(b.id===book.id){
                    book.shelf = whereTo
                 return book
               } else{
                 return b
               }

             })

             BooksAPI.update(book, whereTo);
             setBooks(updateBooks);
   }
    
  useEffect(() =>{
    BooksAPI.getAll()
    .then(data =>   
          setBooks(data)   
      );
  
  }, [])
  
  return(
  <div className="app">
    
    	 <div className="list-books">
            <Header/>     
            <div className="list-books-content">
    			<div>
    			<Shelf books={books} updateBookShelft={updateBookShelft}  />
				</div>
            </div>
            <div className="open-search">
					<Link to="/Search">
              			Add a book
				</Link>
            </div>
          </div>
    </div>  
  )
}

export default Home;