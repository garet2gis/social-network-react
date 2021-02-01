import React from "react";
import User from "./User/User";
import * as axios from "axios";


class Users extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setUsers(response.data.items);
                })
        }
    }
    render() {
        let users = this.props.users.map(u => <User key={u.id} user={u} follow={this.props.follow}
                                                    unfollow={this.props.unfollow}/>);
        return (
            <div>
                {users}
            </div>
        )
    }
}

export default Users;