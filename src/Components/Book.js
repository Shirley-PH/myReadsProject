import React from 'react';

const Book = ({currentShelf, book, updateBookShelft, cover, author, title }) => {
  return(
    				<div className="book"> 
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${cover})` }}></div>                          
                            <div className="book-shelf-changer">
                              <select defaultValue={currentShelf? currentShelf: "none"} onChange={(e) => updateBookShelft(book, e.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{title}</div>
                          <div className="book-authors">{author}</div>
                        </div>
  ); 
};

export default Book; 