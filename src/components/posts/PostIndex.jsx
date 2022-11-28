import React, { useEffect, useState } from "react";
import Post from "./Post";

// comments: https://jsonplaceholder.typicode.com/comments
// posts: https://jsonplaceholder.typicode.com/posts

const PostIndex = () => {
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPosts(data))
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(res => res.json())
            .then(data => setComments(data))
            .catch(err => console.log(err))
    }, []);

    const filterComments = (id) => {
        const matches = comments.filter((obj) => obj.postId === id);
        return matches;
    }

    return (
        <div>
            <ul>
                {/* title and number of comments */}
                {posts.map((post, i) => <Post title={post.title} key={i} comments={filterComments(post.id)} />)}
            </ul>
        </div>
    )
}

export default PostIndex;