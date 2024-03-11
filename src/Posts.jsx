import './Posts.css'
import Post from './Post';
import { useEffect, useState } from "react"

export default function Posts(){
const [posts, setPosts] = useState([]);

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
},[])

    return(
        <div className='post'>
            <h2>posts: {posts.length}</h2>

            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
    
}