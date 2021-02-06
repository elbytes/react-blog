import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title, body, author};
        setIsPending(true);

        fetch('http://localhost:8002/blogs',{
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            setIsPending(false);
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Create New Blog Post</h2>
            <form onSubmit={ handleSubmit}>
            <label>Post Title</label>
            <input
                type="text"
                required 
                value={ title } 
                onChange = { e=> setTitle(e.target.value)}
            />
            <select
            required
            value ={author}
            onChange = {e => setAuthor(e.target.value)}>
                <option>Mario</option>
                <option>Yoshi</option>
            </select>
            <label>Post Body</label>
            <textarea
                required
                value={ body }
                onChange = {e => setBody(e.target.value)}>
            </textarea>
            {!isPending && <button>Submit Post</button>}
            {isPending && <button>Submitting...</button>}
            </form>
        </div>
      );
}
 
export default Create;
