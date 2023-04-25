import {Link, useHistory} from "react-router-dom";

const BlogList =(props)=>{
    const blogs = props.blogs
    return <div className="blog-list">
        {blogs.map((blog)=>{
            return <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <Link to={`/blogs/${blog.id}`}>
                    <strong>{blog.body}</strong>
                    <li>Written by {blog.author}</li>
                </Link>
            </div>
        })}
    </div>
}
export default BlogList;

