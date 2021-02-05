import {useState} from 'react';
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'title 1', body: 'Lorem ipsum dolor...', author: 'mario', id: 1},
        {title: 'title 2', body: 'sit amet consecte...', author: 'luigi', id: 2},
        {title: 'title 3', body:'magni iusto incidu...', author: 'yoshi', id: 3}
    ])
  


    return ( <div className="home">
       <div>{
           blogs.map((blog)=>{

           })
       }</div>
    </div> );
}
 
export default Home;