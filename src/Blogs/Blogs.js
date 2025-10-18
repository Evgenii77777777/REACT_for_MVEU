import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogsAsync } from '../api/blogs';
import BlogCard from './BlogCard/BlogCard';
import Subscribe from './Subscribe/Subscribe';

function Blogs() {
    const dispatch = useDispatch();

    const blogs = useSelector(state => state.blogs.blogs);

    useEffect(() => {
        dispatch(getBlogsAsync());
    }, [dispatch]);

    return (<>
        <h1>Блоги</h1>
        <Subscribe />
        { blogs.map(x => <BlogCard key={x.id} blog={x} />) }
    </>);
}

export default Blogs;