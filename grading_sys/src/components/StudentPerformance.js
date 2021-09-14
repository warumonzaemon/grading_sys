
import { useState, useLayoutEffect } from  "react";
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from "react";
import axios from 'axios';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

const StudentPerformance = () => {
    const dispatch = useDispatch();

    const loggedInUser = useSelector(state => state.loggedInUser);
    const studentData = useSelector(state => state.studentData);

    const writtenWorks = useSelector(state =>state.studentData.writtenWorks);
    const [writtenWorksScore, setWrittenWorksScore] = useState(0);
    const [writtenWorksFails, setWrittenWorksfails] = useState([]);

    const performanceTasks = useSelector(state =>state.studentData.performanceTasks);
    const [performanceTasksScore, setPerformanceTasksScore] = useState(0);

    const majorExams = useSelector(state =>state.studentData.majorExams);
    const [majorExamsScore, setMajorExamsScore] = useState(0);

/*     const initialGrade = useSelector(state => state.studentData.finalGrade.initialGrade); */

 
    const  sum = (accumulator, a) => {
        return accumulator + a;
    }

    function extractScores(arr, prop) {
        let extractedScores = arr.map(item => item[prop]);
        return extractedScores;   
    }

    useEffect(  () => {
        console.log('dispatching');
        axios.get(`http://localhost:8003/studentGrades/get-student-data/${loggedInUser.userId}`).then(res => {
            console.log(res.data);
            dispatch( {type: 'FETCH_STUDENT_DATA', payload: res.data});
            
        })
    },[])

    useEffect(  () => {

        console.log("another useEffect", studentData);
        console.log(writtenWorks);
        if (writtenWorks) {

            console.log(writtenWorks);
            const writtenWorksArr =(writtenWorks.length > 0 ) ? writtenWorks.map(item => item.score) : 0;
            const writtenWorksHPSArr = (writtenWorks.length > 0 ) ? writtenWorks.map(item => item.HPS) : 0;
            const sumWrittenWorksArr= writtenWorksArr.reduce(sum, 0);
            const sumWrittenWorksHPSArr= writtenWorksHPSArr.reduce(sum, 0);
            const writtenWorksScoreRate= (sumWrittenWorksArr/sumWrittenWorksHPSArr);
            setWrittenWorksScore(writtenWorksScoreRate);  
        }

        if (performanceTasks) { 
            const performanceTasksArr = (performanceTasks.length > 0 ) ? performanceTasks.map(item => item.score) : [0];
            console.log(performanceTasksArr.reduce(sum, 0));
            const performanceTasksHPSArr = (performanceTasks.length > 0 ) ? performanceTasks.map(item => item.HPS) : [0];
            const sumPerformanceTasksArr = performanceTasksArr.reduce(sum, 0);
            const sumPerformanceTasksHPSArr = performanceTasksHPSArr.reduce(sum, 0);
            const performanceTasksScoreRate = (sumPerformanceTasksHPSArr === 0) ? 0 : (sumPerformanceTasksArr/sumPerformanceTasksHPSArr);
            setPerformanceTasksScore(performanceTasksScoreRate);                
        };

        if (majorExams) { 
            const majorExamsArr = majorExams.map(item => item.score);
            const majorExamsHPSArr = majorExams.map(item => item.HPS);
            const sumMajorExamsArr = majorExamsArr.reduce(sum, 0);
            const sumMajorExamsHPSArr = majorExamsHPSArr.reduce(sum, 0);
            const majorExamsScoreRate = (sumMajorExamsArr/sumMajorExamsHPSArr);
            setMajorExamsScore(majorExamsScoreRate);
        }

    },[studentData]);

 
    const data = [{data: {
        writtenWorks: writtenWorksScore,
        performanceTasks:performanceTasksScore,
        majorExams: majorExamsScore 
    },
    meta: { color: 'red' }}]

    const captions = {
        // columns
        writtenWorks: 'Written Works',
        performanceTasks: 'Performance Tasks',
        majorExams: 'Major Exams'
    };
    

    return (
        <>
{/*         {console.log(initialGrade)}

        <div className ="message blink_me">
            {initialGrade < 61.60 
            ? <h2>Please seek assistance!</h2>: <h2>{initialGrade < 67.99 
                ? "Study harder! You're almost there.": "You're doing great!"}</h2> }
        </div> */}
        

        
        <div className="Analytics">

            {writtenWorksScore === 0 && performanceTasksScore === 0 && majorExamsScore === 0 ? 'no record yet' : 
            <div>
                <h2 className="ChartName">Your Performance Chart</h2>
                <RadarChart
                    captions={captions}
                    data= {data}
                    size={450}
                    />
            </div>
            }
            <div>
                <h2>Remarks</h2>
                <div>
                    {writtenWorks && writtenWorks.map(data => { 
                        if (data.score <= (data.HPS *.66)) {
                            return <p> &bull; Study more on topic {data.topic} </p>
                        } else if (data.score <= (data.HPS*.50)) {
                            return <p> &bull; Ask your teacher for special tutorial lesson regarding {data.topic}</p>
                        }  
                    })}
                    {writtenWorksScore > .75 ? <p> &bull; Keep up the good work on your quizzes and assignments.</p> 
                    : <p> &bull; Keep on studying and you will nail it!</p> }
                </div>

                <div>
                    {performanceTasks && performanceTasks.map(data => { 
                        if (data.score <= (data.HPS *.66)) {
                            return <p> &bull; You are struggling with {data.topic} activity</p>
                        } else if (data.score <= (data.HPS*.50)) {
                            return <p> &bull; Ask your teacher for special tutorial lesson regarding {data.topic}</p>
                        }  
                    })}
                    {performanceTasksScore > .75 ? <p> &bull; You are very proactive in class!</p> 
                    : <p> &bull; Participate more in class activities</p> }
                </div>
                    
                <div>
                    
                    {majorExamsScore && majorExamsScore > .80 ? <p> &bull; You scored great on the last exam. </p> 
                    : <p> &bull; {majorExamsScore > .50 ? "You score fine on the last exam. " : "Please consult your subject teacher on how to improve your grades." }</p> }
                </div>
        
            </div> 
        </div>
        </>
        
    );
}

export default StudentPerformance;