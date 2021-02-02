
import {addMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody:state.dialogsPage.newMessageBody
    }
};

let mapDispatchToProps ={addMessage,updateNewMessageBody};

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);

