import PropTypes from 'prop-types'
import Bookmark from './Bookmark'

const Bookmarks = ({bookmarks, readingTime}) => {
  return (

    <div className='w-1/3'>
        <div className='p-6 m-4 bg-gray-100 rounded-lg'>
            <h3 className="text-3xl font-bold">Reading Time: {readingTime}</h3>            
        </div>
        <div className="m-4 p-4 bg-gray-100 rounded">
        
        <h2 className="text-3xl font-bold" >Bookmarked Blogs: {bookmarks.length}</h2>
            {
                 bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}/>)
             }
         </div>
    </div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number

}

export default Bookmarks