import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src={'https://w7.pngwing.com/pngs/642/857/png-transparent-internet-meme-redemption-white-sticker-meme.png'}/>
            {props.message}
            <div>
                <span>like {props.likeCount}</span>
            </div>
        </div>
    )
}
export default Post;