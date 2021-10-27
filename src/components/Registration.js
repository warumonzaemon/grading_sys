import { useState } from "react";
import axios from 'axios';

import { useHistory } from 'react-router-dom';

const Registration = () => {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [middleName,setMiddleName] = useState('');
    const [userId,setUserId] = useState('');
    const [email,setEmail] = useState('');
    const [role, setRole] = useState('');
    const [gradeLevel,setGradeLevel] = useState('');
    const [section,setSection] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const onUserRegisterHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8003/user/email-exists', { checkThisEmail: email}).then( res=> {
            console.log(res.data);
            let user = {
                firstName: firstName,
                lastName: lastName,
                middleName: middleName,
                userId: userId,
                email: email,
                role: role,
                gradeLevel: gradeLevel,
                section: section,
                password: password
            };
            if (!res.data) { 
                axios.post('http://localhost:8003/user/user-id-exists', { userId: userId}).then( res=> {
                console.log(res.data);

                if (!res.data) { 
                    axios.post('http://localhost:8003/user/register', user).then( res =>{
                    alert(res.data);
                    history.push('/');
                });
                } else {
                    alert(`User ID ${userId} has been taken.`)
                }
                
                });
            
            } else {
                alert(`Email ${email} has been taken.`)
            };
        });
    };

    return (
        <div>
            <form onSubmit={ onUserRegisterHandler }>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                <label htmlFor="lastName">Last Name:</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />

                <label htmlFor="middleName">Middle Name:</label>
                <input type="text" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />

                <label htmlFor="userId">Student Number/Employee Number:</label>
                <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
                
                <label htmlFor="email">Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="role">Role:</label>
                <select onChange={(e) => setRole(e.target.value)}>
                    <option disable selected hidden>Select role...</option>
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                    <option value="admin">Admin</option>
                </select>
                { role == 'student' ? 
                <>
                    <label htmlFor="gradeLevel">Grade Level:</label>
                    <input type="text" value={gradeLevel} onChange={(e) => setGradeLevel(e.target.value)} />

                    <label htmlFor="section">Section:</label>
                    <input type="text" value={section} onChange={(e) => setSection(e.target.value)} />
                </> : ""}


                <label htmlFor="password">Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <input type="submit" value="Register" />
            </form>
        </div>
    )
}

export default Registration;