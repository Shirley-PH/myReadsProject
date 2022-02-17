import React from 'react';
import Book from './Book';

const Shelf = ({books, updateBookShelft}) => {
  
  return(
  		<div className="bookshelf">
   			<div>
          <h2 className="bookshelf-title"> Currently Reading</h2>
        
                  <div className="bookshelf-books">
                    <ol className="books-grid">
  						{books
    					.filter((book)=> book.shelf==="currentlyReading")
  						.map((book)=>(
        					<li key={book.id}>
                        	<Book 
							updateBookShelft={updateBookShelft} 
                            currentShelf={book.shelf}
                            title={book.title}
                            author={book.authors ? book.authors.join(", ") : "N/A"}
                            book={book}
                            cover={
                              book.imageLinks
                                ? book.imageLinks.thumbnail
                                : "N/A"
                      }
							/>
                      		</li>
       					 ))}
                    </ol>
                  </div>
				</div>

				<div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books
                .filter((book) => book.shelf === "wantToRead")
                .map((book) => (
                  <li key={book.id}>
                    <Book
                      updateBookShelft={updateBookShelft} 
                      currentShelf={book.shelf}
                      title={book.title}
                      author={book.authors ? book.authors.join(", ") : "N/A"}
                      book={book}
                      cover={
                        book.imageLinks
                          ? book.imageLinks.thumbnail
                          : "N/A"
                      }
                    />
                  </li>
                ))}
            </ol>
          </div>
        </div>
			<div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books
                .filter((book) => book.shelf === "read")
                .map((book) => (
                  <li key={book.id}>
                    <Book
                     updateBookShelft={updateBookShelft} 
                      currentShelf={book.shelf}
                      title={book.title}
                      author={book.authors ? book.authors.join(", ") : "N/A"}
                      book={book}
                     cover={
                        book.imageLinks
                          ? book.imageLinks.thumbnail
                          : "N/A"
                      }
                    />
                  </li>
                ))}
            </ol>
          </div>
        </div>
         </div>
  )  
}

export default Shelf; 