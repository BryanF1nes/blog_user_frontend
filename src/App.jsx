import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import Post from "./components/Post";
import Nav from "./components/Nav/Nav";
import profile from "./assets/profile.jpeg";
import {
  faDiscord,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  const [post, getPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("http://localhost:3000/post");
        if (!response.ok) {
          throw new Error(`Error - Response ${response.status}`);
        }
        const data = await response.json();
        getPosts(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchPosts();
  }, []);

  console.log(post);

  return (
    <>
      <Nav image_url={`${profile}`} />
      <main>
        <div className="cta">
          <h1>Welcome to my blog!</h1>
          <p>
            My name is Bryan, I created this blog originally as a project while
            learning Full-Stack software development through The Odin Project! I
            would love to connect with you if you have any questions or wish to
            work together!
          </p>
          <button>Connect</button>
        </div>
      </main>
      <div className="blog-container">
        {post.map((post) => {
          let className = "post-template";
          return (
            <>
              <Post
                classname={className}
                title={post.title}
                author={post.author.name}
                body={post.body}
                limit={100}
              />
            </>
          );
        })}
      </div>
      <footer>
        <div>
          <p>&copy; Bryan Fines - 2024</p>
          <div className="socials">
            <a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faDiscord} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
