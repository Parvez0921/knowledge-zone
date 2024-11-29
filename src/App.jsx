
import './App.css'
import Blogs from './components/Blogs/blogs'
import Header from './components/Header'
import Bookmarks from './components/Bookmarks';
import { useState } from 'react';
import PropTypes from 'prop-types';

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddBookmark = blog =>{
    const newBookmarks =[...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const handleMarkedAsRead = (id,time) =>{
    const newReadingTime = readingTime + parseInt(time);
    setReadingTime(newReadingTime);
    console.log('remove bookmark', id)
    const remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmark)

  }


  return (
    <>
      
      <Header/>
      <div className='md:flex m-10 max-w-7xl mx-auto'>
        <Blogs
        handleMarkedAsRead={handleMarkedAsRead}  
        handleAddBookmark={handleAddBookmark}/>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}/>

      </div>
    </>
  )
}

App.propTypes = {
  handleAddBookmark: PropTypes.func,
  handleMarkedAsRead: PropTypes.func

}

export default App
