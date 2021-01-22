import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={classes.posts}>
               <Post message = 'hey, nibba' likeCount = '122'/>
               <Post message = 'get the fuck out' likeCount = '5'/>
               <Post message = 'It is my first post' likeCount = '3'/>
            </div>
        </div>
    )
}
export default MyPosts;