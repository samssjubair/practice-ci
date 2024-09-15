import { useEffect, useState } from "react";
import "./App.css";
import Post from "./components/Post";

function App() {
  // const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url: string = import.meta.env.VITE_API_URL + "/posts";
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <>
      <h1>Notebook Post</h1>

      {posts.map((post: { id: number; title: string; body: string }) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default App;
