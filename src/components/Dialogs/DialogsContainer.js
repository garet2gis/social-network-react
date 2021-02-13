import {addMessage} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
};

let mapDispatchToProps = {addMessage};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(Dialogs)
