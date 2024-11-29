
import './App.css'
import Blogs from './components/Blogs/blogs'
import Header from './components/Header'
import Bookmarks from './components/Bookmarks';
import { useState } from 'react';
import PropTypes from 'prop-types';

function App() {

  const [bookmarks, setBookmarks] = useState([])

  const handleAddBookmark = blog =>{
    const newBookmarks =[...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  return (
    <>
      
      <Header/>
      <div className='md:flex m-10 max-w-7xl mx-auto'>
        <Blogs handleAddBookmark={handleAddBookmark}/>
        <Bookmarks bookmarks={bookmarks}/>

      </div>
    </>
  )
}

App.propTypes = {
  handleAddBookmark: PropTypes.func
  
}

export default App
