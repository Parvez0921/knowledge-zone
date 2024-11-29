import PropTypes from 'prop-types'
import Bookmark from './Bookmark'

const Bookmarks = ({bookmarks}) => {
  return (
    <div className="w-1/3 m-4 p-4 bg-gray-100 rounded">
            <h2 className="text-3xl font-bold" >Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}/>)
            }
    </div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array

}

export default Bookmarks