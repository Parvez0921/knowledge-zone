import PropTypes from 'prop-types';
import { CiBookmarkPlus } from "react-icons/ci";
const Blog = ({blog, handleAddBookmark}) => {
    const {title, cover_picture,author, author_image,reading_time,hashtag, posted_date} = blog;
    return (
        <div className='bg-slate-300 p-6 m-10 rounded-lg'>
            <img className='rounded-md' src={cover_picture} alt={`Cover pictue of the title ${title}`} />
            <div className='flex justify-between m-6'>
                <div className='flex'>
                    <img className='w-14 h-14 rounded-full' src={author_image} alt="" />
                    <div className='mx-2'>
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} read time</span>
                    <button onClick={() => handleAddBookmark(blog)} className='ml-2 text-2xl'><CiBookmarkPlus/></button>
                </div>

            </div>
            <div className='m-6'>
            <h2 className="text-4xl font-bold">{title}</h2>
            <p className='m-4'>
                {
                    hashtag.map((hash, idx)=> <span key={idx}> <a href="">#{hash} </a></span>)
                }
            </p>
            </div>
            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func
}

export default Blog;