import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements =
        props.store.state.profilePage.posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () =>{
        props.store.addPost();
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.store.updateNewPostText(text);

    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref = {newPostElement} onChange={onPostChange} value={props.store.state.profilePage.newPostText}></textarea>
                </div>
                <div>
                    <button onClick = {addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;