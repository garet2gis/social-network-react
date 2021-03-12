import {addPost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import React from "react";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};


const MyPostContainer = (props) =>{
    return <MyPosts {...props}/>
}

export default connect(mapStateToProps, {addPost})(MyPostContainer);

