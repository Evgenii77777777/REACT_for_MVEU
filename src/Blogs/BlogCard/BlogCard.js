import { NavLink } from "react-router";

function BlogCard({ blog }) {
    return (<div>
        <h2>{blog.title}</h2>
        <p>{blog.preview}</p>
        <NavLink to={`/blogs/${blog.id}`}>Читать полностью</NavLink>
    </div>);
}

export default BlogCard;