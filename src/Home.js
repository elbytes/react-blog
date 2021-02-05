import {useState} from 'react';
import Bloglist from './Bloglist';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'Title 1', body: 'Lorem ipsum dolor...', author: 'mario', id: 1},
        {title: 'Title 2', body: 'sit amet consecte...', author: 'luigi', id: 2},
        {title: 'Title 3', body:'magni iusto incidu...', author: 'yoshi', id: 3}
    ]);
  

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
            <Bloglist blogs={blogs} title='All Blog Posts' handleDelete={handleDelete}/>
            <Bloglist blogs={blogs.filter((blog)=>blog.author === 'mario')} title="Mario's blogs" handleDelete={handleDelete}/>
        </div> );
}
 
export default Home;