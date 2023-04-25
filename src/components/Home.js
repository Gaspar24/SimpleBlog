import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () =>{
    const {data:blogs,error,loading} =useFetch("http://localhost:8000/blogs");
    return <div className="home">
        <h2>Homepage</h2>
        {error && <div>{error}</div>}
        {loading && <div>Loading....</div>}
        {blogs && <BlogList blogs = {blogs} />}
    </div>
}
export default Home;