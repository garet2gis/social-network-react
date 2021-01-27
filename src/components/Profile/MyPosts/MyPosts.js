import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    let postsElements =
        props.state.posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>);
    let newPostElement = React.createRef();

    let addPost = () =>{
        let action = addPostCreator();
        props.dispatch(action);
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        let action = updateNewPostTextCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref = {newPostElement} onChange={onPostChange} value={props.state.newPostText}></textarea>
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