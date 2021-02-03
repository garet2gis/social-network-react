
import {addPost, updateNewPostText} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = {addPost, updateNewPostText};


export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);

