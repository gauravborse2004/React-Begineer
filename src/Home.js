import { useState, useEffect } from "react";
import BlogList from "./Bloglist";
import useFetch  from "./useFetch";

const Home = () => {

   const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

    // const [blogs, setBlogs] = useState(null);
    //  const [isPending, setIsPending] = useState(true);
    //  const [error, setError] = useState(null);

    // const handleDelete = (id) => {
    //   const newBlogs = blogs.filter(blog => blog.id !== id);
    //   setBlogs(newBlogs);
    // }

    // const [name, setName] = useState("Gaurav");

    // const [name, setName] = useState("Om");
    // const [age, setAge] = useState(16);

    // const handleClick = () => {
    //     setName("Gaurav");
    //     setAge(21);
    // }

    // const handleClick = () => {
    //     console.log("Hello, Dear");
    // }

    // const handleClickAgain = (name) => {
    //     console.log('Hello ' + name);
        
    // }

    return ( 
        <div className="home">
          { error && <div>{ error }</div> }
          { isPending && <div>Loading...</div> }
           {blogs && <BlogList blogs={blogs} title="All Blogs" />}

             {/* {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />} */}

             {/* <button onClick={() => setName('Navnath')}>Change Name</button> */}
             {/* <p>{name}</p> */}

             {/* <BlogList blogs={blogs.filter((blog) => blog.author === "Gaurav")} title="Gaurav's Blogs" /> */}

             {/* {blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
                </div>
            ))} */}

            {/* <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click Here</button> */}


            {/* <button onClick={() => handleClickAgain('Gaurav')}>Click here again</button> */}
        </div>
     );
}
 
export default Home;

