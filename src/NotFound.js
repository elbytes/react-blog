import {Link} from 'react-router-dom';

const NotFound = () => {
    return ( 
        <div className="blog-details">
            <h2>Oopsies!</h2>
            <p>The page you are looking for could not be found</p>
            <Link to='/'>Back to home page...</Link>
        </div>
     );
}
 
export default NotFound
