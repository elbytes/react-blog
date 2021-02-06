import {useState, useEffect} from 'react';
import Bloglist from './Bloglist';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
        .then(res=>{
            if(!res.ok){
                throw Error('could not fetch data');
            }
            return res.json()
        })
        .then(data =>{ 
            setBlogs(data);
            setIsPending(false);
            setError(null);
        }).catch(err =>{
            setError(err.message);
            setIsPending(false);
        })
    }, []);

    return ( 
        <div className="home">
            {isPending && <p>Loading...</p>}
            {error && <div>{error}</div>}
            {blogs && <Bloglist blogs={blogs} title='All Blog Posts'/>}
            {blogs && <Bloglist blogs={blogs.filter((blog)=>blog.author === 'mario')} title="Mario's blogs"/>}
        </div> );
}
 
export default Home;