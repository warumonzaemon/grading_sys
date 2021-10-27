import '../App.css';
import { useState } from "react";
import { Route, Link } from 'react-router-dom';
import {useSelector ,useDispatch} from 'react-redux';
import { useEffect } from "react";


import axios from 'axios';
import AddStudent from "./AddStudent";


const ClassRecord = () => {
    const loggedInUser = useSelector(state => state.loggedInUser);
    const classRecord = useSelector(state => state.classRecord);

    const dispatch = useDispatch();
    const [users, setUsers] = useState([]);
/*     const [classRecord,setClassRecord] = useState([]); */

    useEffect(  () => {
        axios.get('http://localhost:8003/user').then(res => {
            setUsers(res.data);
            console.log(users);
        })

        axios.get('http://localhost:8003/studentGrades').then(res => {
            console.log(res.data);
            dispatch( {type: 'FETCH_CLASS_RECORD', payload: res.data});
        })
    }, [loggedInUser/* ,AddStudent,classRecord */])

    console.log(classRecord);

    let studentUsers = users.filter( data => data.role == 'student')

    console.log(studentUsers);

    
 if (classRecord) {
    return(
        <>
{/*             <button >
                <Link to="/addStudent">Add Student</Link>
            </button>
            <Route path="/addStudent" component={AddStudent} /> */}

            <div className="table">
                <table className="Record">
                    <thead>
                        <tr className="title-row">
                            <th>Student No.</th>
                            <th>Student Name</th>
                            <th>Written Works (30%)</th>
                            <th>Total Score</th>
                            <th>PS</th>
                            <th>WS</th>
                            <th>Performance Tasks(50%)</th>
                            <th>Total Score</th>
                            <th>PS</th>
                            <th>WS</th>
                            <th>Major Exams(20%)</th>
                            <th>Total Score</th>
                            <th>PS</th>
                            <th>WS</th>
                            <th>Initial Grade</th>
                            <th>Quarterly Grade</th>
                        </tr>
                    </thead>
                    <tbody>                        
                       {classRecord.map(data => { 
                           return (
                            <tr className="main-row">
                                <td>{data.userId}</td>
                                <td>{data.lastName}, {data.firstName}</td>
                                <td>
                                    <table className="nested-table">
                                        <tr className="sub-table">
                                            {data.writtenWorks.map(data => {
                                            return (
                                                <td className={data.score <= (data.HPS*.5) ? "bg-danger" : `${data.score <= (data.HPS*.66) ? "bg-warning" : '' }` }>{data.score} </td>
                                            )
                                            })}
                                        </tr>
                                    </table>                           
                                </td>
                                <td className={data.writtenWorksPSWS.totalScore <= (data.writtenWorksPSWS.totalHPS*.5) ? "bg-danger" : `${data.writtenWorksPSWS.totalScore <= (data.writtenWorksPSWS.totalHPS*.66) ? "bg-warning" : '' }` }>{data.writtenWorksPSWS.totalScore}</td>
                                <td className={data.writtenWorksPSWS.percentageScore <= 60 ? "bg-danger td-padding" : `${data.writtenWorksPSWS.percentageScore <= 67.99 ? "bg-warning  td-padding" : 'td-padding' }` }>{data.writtenWorksPSWS.percentageScore}%</td>
                                <td className={data.writtenWorksPSWS.weightedScore <= 74 ? "bg-danger td-padding" : `${data.writtenWorksPSWS.weightedScore <= 79 ? "bg-warning td-padding" : ' td-padding' }` }>{data.writtenWorksPSWS.weightedScore}%</td>
                                <td>
                                    <table className="nested-table">
                                        <tr  className="sub-table">
                                            {data.performanceTasks.map(data => {
                                            return (
                                                <td  className={data.score <= (data.HPS*.5) ? "bg-danger" : `${data.score <= (data.HPS*.66) ? "bg-warning" : '' }` }>{data.score} </td>
                                            )
                                            })}
                                        </tr>
                                    </table>                           
                                </td>
                                <td className={data.performanceTasksPSWS.totalScore <= (data.performanceTasksPSWS.totalHPS*.5) ? "bg-danger" : `${data.performanceTasksPSWS.totalScore <= (data.performanceTasksPSWS.totalHPS*.66) ? "bg-warning" : '' }` }>{data.performanceTasksPSWS.totalScore}</td>
                                <td className={data.performanceTasksPSWS.percentageScore <= 60 ? "bg-danger" : `${data.performanceTasksPSWS.percentageScore <= 67.99 ? "bg-warning" : '' }` }>{data.performanceTasksPSWS.percentageScore}%</td>
                                <td className={data.performanceTasksPSWS.weightedScore <= 74 ? "bg-danger" : `${data.performanceTasksPSWS.weightedScore <= 79 ? "bg-warning" : '' }` }>{data.performanceTasksPSWS.weightedScore}%</td>                                       
                                <td>
                                    <table className="nested-table">
                                        <tr  className="sub-table">
                                            {data.majorExams.map(data => {
                                            return (
                                                <td  className={data.score <= (data.HPS*.5) ? "bg-danger" : `${data.score <= (data.HPS*.66) ? "bg-warning" : '' }` }>{data.score} </td>
                                            )
                                            })}
                                        </tr>
                                    </table>                           
                                </td>
                                <td className={data.majorExamsPSWS.totalScorescore <= (data.majorExamsPSWS.totalHPS*.5) ? "bg-danger" : `${data.majorExams.totalScorescore <= (data.majorExams.totalHPS*.66) ? "bg-warning" : '' }` }>{data.majorExamsPSWS.totalScore}</td>
                                <td className={data.majorExamsPSWS.percentageScore <= 60 ? "bg-danger" : `${data.majorExamsPSWS.percentageScore <= 67.99 ? "bg-warning" : '' }` }>{data.majorExamsPSWS.percentageScore}%</td>
                                <td className={data.majorExamsPSWS.weightedScore <= 74 ? "bg-danger" : `${data.majorExamsPSWS.weightedScore <= 79 ? "bg-warning" : '' }` }>{data.majorExamsPSWS.weightedScore}%</td>                                       
                                <td className={data.finalGrade.initialGrade <= 60 ? "bg-danger" : `${data.finalGrade.initialGrade <= 67.99 ? "bg-warning" : '' }` }>{data.finalGrade.initialGrade}%</td>                                       
                                <td className={data.finalGrade.quarterlyGrade <= 74 ? "bg-danger" : `${data.finalGrade.quarterlyGrade <= 79 ? "bg-warning" : '' }` }>{data.finalGrade.quarterlyGrade}%</td>                                       
                            </tr>
                           );
                                        
                            }

                            )} 
                    </tbody>
                </table>

            </div>

        </>
    )
 }
    
    
    

}

export default ClassRecord;