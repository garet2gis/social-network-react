import React from "react";
import User from "./User/User";
import * as axios from "axios";


let Users = (props) =>{

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response =>{
                props.setUsers(response.data.items)
            })
       /* props.setUsers([
            {
                id: 1,
                photoUrl: 'https://i.pinimg.com/736x/2d/0e/41/2d0e419c310033945063c6c9884b2725.jpg',
                followed: true,
                fullName: 'Vova',
                status: 'going home',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 2, photoUrl: 'https://i.pinimg.com/564x/10/a1/37/10a137c1fba5460a3658e027135afc99.jpg',
                followed: false,
                fullName: 'Victor',
                status: 'walking with dog',
                location: {city: 'Saint Petersburg', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://assets.change.org/photos/0/ux/dp/DpuxDpYPEfMmBCI-800x450-noPad.jpg?1578666314',
                followed: true,
                fullName: 'Chungus',
                status: 'big',
                location: {city: 'Kiev', country: 'Ukraine'}
            }
        ]);*/
    }
    let users = props.users.map(u => <User key = {u.id} user = {u} follow = {props.follow} unfollow = {props.unfollow}/>);

    return(
        <div>
            {users}
        </div>
    )
}

export default Users;