import { useState } from "react";
import BlogList from "./Bloglist";

const Home = () => {

    const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Gaurav', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Navnath', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Om', id: 3 }
  ]);

  const handleDelete = (id) => {
    
  }

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

             <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
             <BlogList blogs={blogs.filter((blog) => blog.author === "Gaurav")} title="Gaurav's Blogs" />

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

