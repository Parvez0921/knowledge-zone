
import './App.css'
import Blogs from './components/Blogs/blogs'
import Header from './components/Header'
import Bookmarks from './components/Bookmarks';

function App() {
  

  return (
    <>
      
      <Header/>
      <div className='md:flex'>
        <Blogs/>
        <Bookmarks/>

      </div>
    </>
  )
}

export default App
