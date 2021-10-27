import { useState } from "react";
import axios from 'axios';

import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";

const LoginForm = (props) => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    if (!props.show) {
        return null
    }

    const onSubmitFormHandler = (e) => {
        e.preventDefault();

        // We will have the POST request here
        axios.post( 'http://localhost:8003/user/login ', { userId: userId, password: password }).then( res => {
            if( !res.data.error ){
                console.log(res.data);
                dispatch({type: 'LOGGED_USER', payload: res.data });
                history.push('/');
            }else{ alert(res.data.error); }
        });
        

        setUserId('')
        setPassword('')
        props.setShow(false)
    }

    return (
        <div className="modal" >
            <div  className="modal-content" /* onClose={e => e.stopPropagation()} */>
                <h2>Login</h2>
                <form onSubmit={ onSubmitFormHandler }>
                    <label  htmlFor="userId">User ID:</label>
                    <input className="form-input" type="userId" value={userId} onChange={(e) => setUserId(e.target.value)} />

                    <label  htmlFor="password">Password:</label>
                    <input className="form-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <input type="submit" value="Login" />
                    <button onClick={props.onClose} className="close-button">Cancel</button>
                </form>

            </div>
        </div>
    )
}

export default LoginForm;
