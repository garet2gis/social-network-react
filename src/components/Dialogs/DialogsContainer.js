
import {addMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody:state.dialogsPage.newMessageBody
    }
};

let mapDispatchToProps ={addMessage,updateNewMessageBody};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
)(Dialogs)
