import { useState } from 'react'
import './App.css'
import Post from './Components/Post';

function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  };

  return (
    <>
      <button className='btn btn-glow btn-gradient' onClick={fetchPosts}>GET POSTS</button>
      <div>
        {posts.map((el) => (
          <Post key={el.id} title={el.title} body={el.body} />
        ))}
      </div>
    </>
  )
}

export default App