import React from "react";

import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {FormControl} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);
const Textarea = FormControl('textarea');

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likeCount={p.likesCount} key={p.id}/>);

    let onAddPost = (data) => {
        props.addPost(data.newPostText);
    }

    return (
        <div>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter post'} name='newPostText' component={Textarea}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

AddNewPostForm = reduxForm({form: 'AddNewPostForm'})(AddNewPostForm);

export default MyPosts;