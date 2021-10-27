import LoginForm from "./LoginForm";
import Registration from "./Registration";

const Modal = (props) => {
    if (!props.show) {
        return null
    }

    return(
       <div className="modal">
           <div className="modal-content">
                <p>This is Modal</p>
                <LoginForm />
                {/* <Registration /> */}
                <button onClick={props.onClose} className="close-button">X</button>
           </div>

       </div>
    )
};

export default Modal;