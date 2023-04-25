
import {useState} from "react";
import {useHistory} from "react-router-dom";

const Create=()=>{
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('Gaspar');
    const [loading,setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (event)=>{
        event.preventDefault();
        const blog = {title,body,author}
        setIsLoading(true);
        fetch("http://localhost:8000/blogs",{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        })
            .then(()=>{
                setIsLoading(false);
                history.push('/');
            })


    }
    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit} >
                <label>Blog title:</label>
                <input
                type='text'
                required
                value={title}
                onChange={(event)=>setTitle(event.target.value)}
                />
                <label> log body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(event)=>setBody(event.target.value)}>
                </textarea>
                <select value={author}  onChange={(event)=>setAuthor(event.target.value)}>
                    <option value="Gaspar">Gaspar</option>
                    <option value="Marian">Marian</option>
                </select>
                {!loading &&  <button>Add Post</button> }
                {loading &&  <button disabled>Adding...</button> }


            </form>
        </div>
    );
}


export default Create;
