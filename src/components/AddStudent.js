import { useHistory } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';
import { /* Route, */ Link } from 'react-router-dom';


const AddStudent = () => {
    const [userId, setUserId] = useState('');

    const history = useHistory();

    const onSubmitFormHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8003/user/user-id-exists', { userId: userId}).then( res=> {
            console.log(res.data);
            if(res.data) {
                axios.post('http://localhost:8003/studentGrades/user-id-exists', { userId: userId}).then( res=> {
                    console.log(res.data);
    
                    if (!res.data) { 
                        axios.post('http://localhost:8003/user/get-user-data',{ userId: userId}).then( res => {
                            axios.post('http://localhost:8003/studentGrades/new-student', { 
                                userId: userId, 
                                lastName: res.data.lastName, 
                                firstName: res.data.firstName,
                                middleName: res.data.middleName}).then( res =>{
                                alert(res.data);
                                history.push('/');
                        })

                    });
                    } else {
                        alert(`A record already existed for User ID ${userId}.`)
                    }
                    
                    });
            } else {
                alert(`No student found with student number ${userId}.`)
            }

        });


    }

    
    return(
        <div>
            <form onSubmit={ onSubmitFormHandler }>
                <label htmlFor="userId">User ID:</label>
                <input type="userId" value={userId} onChange={(e) => setUserId(e.target.value)} />
                <input type="submit" value="Add Student" />
                <button >
                <Link to="/">Cancel</Link>
            </button>
            </form>
        </div>
    )
}

export default AddStudent;