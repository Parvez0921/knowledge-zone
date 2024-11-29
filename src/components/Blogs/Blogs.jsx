import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropTypes from "prop-types";

const Blogs = ({handleAddBookmark, handleMarkedAsRead}) => {
    const [blogs, setBlogs]= useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data=> setBlogs(data))
    },[])

    return (
        <div className="w-2/3">
            <h1 className="text-4xl font-bold">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleAddBookmark={handleAddBookmark}
                    handleMarkedAsRead={handleMarkedAsRead}
                    ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddBookmark: PropTypes.func,
    handleMarkedAsRead: PropTypes.func
}

export default Blogs;