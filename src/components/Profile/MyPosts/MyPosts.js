import React from "react";

import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {FormControl} from "../../common/FormsControls/FormsControls";
import styled from "styled-components";
import {StyledButton} from "../../styled/StyledButton";

const maxLength10 = maxLengthCreator(50);
const Textarea = FormControl('textarea');


export const PostBlockWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
`

export const PostBlockHeader = styled.h3`
    margin:10px 0px;
`

export const PostsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
`


const MyPosts = (props) => {

    let reverseArr = props.posts.slice().reverse();
    let postsElements =
        reverseArr.map(p => <Post fullName = {props.fullName} photo = {props.photo} message={p.message} likeCount={p.likesCount} key={p.id}/>);

    let onAddPost = (data) => {
        props.addPost(data.newPostText);
    }

    return (
        <PostBlockWrapper>
            <PostBlockHeader>My posts</PostBlockHeader>
            <AddNewPostForm onSubmit={onAddPost}/>
            <PostsWrapper>
                {postsElements}
            </PostsWrapper>
        </PostBlockWrapper>
    )
}

export const AddNewPostFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    justify-content:space-between;
`

export const AddNewPostFormStyledButton = styled(StyledButton)`
   align-self: flex-end;
`

let AddNewPostForm = (props) => {
    return (
        <AddNewPostFormStyled onSubmit={props.handleSubmit}>
            <Field placeholder={'Enter post'} name='newPostText' component={Textarea}
                   validate={[required, maxLength10]}/>
            <AddNewPostFormStyledButton type="submit" value="Add post"/>
        </AddNewPostFormStyled>
    )
}

AddNewPostForm = reduxForm({form: 'AddNewPostForm'})(AddNewPostForm);

export default MyPosts;