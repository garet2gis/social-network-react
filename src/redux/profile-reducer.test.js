import profileReducer, {addPost, deletePost} from "./profile-reducer";

const initialState = {
    posts: [
        {id: 1, message: 'hey, friend', likesCount: 228},
        {id: 2, message: 'get the fuck out', likesCount: 9},
        {id: 3, message: 'It is my first post', likesCount: 3}
    ]
};

it('posts length after adding new post should be incremented', () => {
    let action = addPost("New post");
    let newState = profileReducer(initialState,action);
    expect(newState.posts.length).toBe(4);
})

it('message after adding new post should be correct', () => {
    let action = addPost("New post");
    let newState = profileReducer(initialState,action);
    expect(newState.posts[3].message).toBe("New post");
})

it('posts length after deleting post should be decremented', () => {
    let action = deletePost(1);
    let newState = profileReducer(initialState,action);
    expect(newState.posts.length).toBe(2);
})

it('deleting post with incorrect id should be done nothing', () => {
    let action = deletePost(-1);
    let newState = profileReducer(initialState,action);
    expect(initialState).toStrictEqual(newState);
})
