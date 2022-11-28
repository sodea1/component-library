import React, { useState, useEffect } from "react";

// body
// :
// "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
// email
// :
// "Eliseo@gardner.biz"
// id
// :
// 1
// name
// :
// "id labore ex et quam laborum"
// postId
// :
// 1

const Post = ({ title, comments }) => {
    const [isShown, setIsShown] = useState(false);

    const showComments = (e) => {
        e.preventDefault();
        setIsShown(isShown ? false : true);
    }

    return (
        <li>
            {title}
            <ul>
                {!isShown ? <li onClick={showComments}>{`${comments.length} comments`}</li> : comments.map((comment, i) => <li key={i}>{comment.body}</li>) }
            </ul>
        </li>
    )
}

export default Post;