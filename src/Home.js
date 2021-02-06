import Bloglist from './Bloglist';
import useFetch from './useFetch';

const Home = () => {

    const {data: blogs, error, isPending} = useFetch('http://localhost:8002/blogs');

    return ( 
        <div className="home">
            {isPending && <p>Loading...</p>}
            {error && <div>{error}</div>}
            {blogs && <Bloglist blogs={blogs} title='All Blog Posts'/>}
            {blogs && <Bloglist blogs={blogs.filter((blog)=>blog.author === 'mario')} title="Mario's blogs"/>}
        </div> );
}
 
export default Home;