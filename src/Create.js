import { useState } from 'react';

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title, body, author};
        console.log(blog);
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
            <button>Submit Post</button>
            </form>
        </div>
      );
}
 
export default Create;
