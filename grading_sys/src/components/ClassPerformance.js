
import { useState, useLayoutEffect } from  "react";
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from "react";
import axios from 'axios';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

const ClassPerformance = () => {
    const dispatch = useDispatch();

    const loggedInUser = useSelector(state => state.loggedInUser);
    const classRecord = useSelector(state => state.classRecord);

    const totalClassWrittenScores = classRecord.map(item => item.writtenWorksPSWS.percentageScore).filter(( data ) => {
        return data !== undefined;
     });
    const totalClassPerformanceScores = classRecord.map(item => item.performanceTasksPSWS.percentageScore).filter(( data ) => {
        return data !== undefined;
     });
    const totalClassExamScores = classRecord.map(item => item.majorExamsPSWS.percentageScore).filter(( data ) => {
        return data !== undefined;
     });

    const  sum = (accumulator, a) => {
        return accumulator + a;
    }

    const classWrittenAveScore = (totalClassWrittenScores.reduce(sum,0))/totalClassWrittenScores.length;
    const classPerformanceAveScore = (totalClassPerformanceScores.reduce(sum,0))/totalClassPerformanceScores.length;
    const classExamAveScore = (totalClassExamScores.reduce(sum,0))/totalClassExamScores.length;

    const classWrittenFailCount50 = totalClassWrittenScores.filter( data => {
        if (data < 50 ) {return data}
    }).length;
    
    const classWrittenFailCount65 = totalClassWrittenScores.filter( data => {
        if (data < 64.8 ) {return data}
    }).length;

    const classPerformanceFailCount50 = totalClassPerformanceScores.filter( data => {
        if (data < 50 ) {return data}
    }).length;

    const classPerformanceFailCount65 = totalClassPerformanceScores.filter( data => {
        if (data < 64.8 ) {return data}
    }).length;

    const classExamFailCount50 = totalClassExamScores.filter( data => {
        if (data < 50 ) {return data}
    }).length;

    const classExamFailCount65 = totalClassExamScores.filter( data => {
        if (data < 64.8 ) {return data}
    }).length;

    console.log(classWrittenFailCount50)


    console.log(totalClassWrittenScores)
    console.log(classWrittenAveScore)
    console.log(totalClassPerformanceScores)
    console.log(classPerformanceAveScore)
    console.log(totalClassExamScores)
    console.log(classExamAveScore)

    const data = [{data: {
        writtenWorks: classWrittenAveScore/100,
        performanceTasks:classPerformanceAveScore/100,
        majorExams: classExamAveScore/100 
    },
    meta: { color: 'red', class:'radar' }}]

    const captions = {
        // columns
        writtenWorks: 'Written Works',
        performanceTasks: 'Performance Tasks',
        majorExams: 'Major Exams'
    };

    return(
        <div className="Analytics">

            <div>
                <h2 className="ChartName">Class Performance Chart</h2>
                <RadarChart className="radar"captions={captions} data= {data} size={400} />
            </div>


            <div className="Updates">
                <h2>Updates</h2>
                <div>
                    {classWrittenFailCount50 > 0 ? <p>{classWrittenFailCount50} of the students{classWrittenFailCount50 > 1 ? ' are ' : ' is ' }failing written activites. </p> : ''}
                    {classPerformanceFailCount50 > 0 ? <p>{classPerformanceFailCount50} of the students{classPerformanceFailCount50 > 1 ? ' are ' : ' is ' }failing in performance on given tasks.</p> : ''}
                    {classExamFailCount50 > 0 ? <p>{classExamFailCount50} of the students have failed on the recent exam{totalClassExamScores.length > 1 ? 's.' : '' } </p> : ''}
                    {classWrittenFailCount50 > 0 || classPerformanceFailCount50 > 0 ||  classExamFailCount50 > 0 ? <p>Check which subject topic they need to focus on. Also, see if we can ask their guardians for home learning support. </p> : ''  }
                </div>
                
                <div>        
                    {classWrittenFailCount65 > 0 ? <p>{classWrittenFailCount65} of the students{classWrittenFailCount65 > 1 ? ' are ' : ' is ' } passing but struggles on written works.  </p> : ''}
                    {classPerformanceFailCount65 > 0 ? <p>{classPerformanceFailCount65} of the students{classPerformanceFailCount65 > 1 ? ' are ' : ' is ' }struggling on erformance tasks </p> : ''}
                    {classExamFailCount65 > 0 ? <p>{classExamFailCount65} of the students almost failed on the recent exam{totalClassExamScores.length > 1 ? 's.' : '' } </p> : ''}
                    {classWrittenFailCount65 > 0 || classPerformanceFailCount65 > 0 ||  classExamFailCount65 > 0 ? <p>Check which subject topic they need to improve. </p> : ''  }
                </div>
                <div> 
                    {classWrittenFailCount50 < 1 && classWrittenFailCount65 < 1 && classPerformanceFailCount50 < 1  &&  classPerformanceFailCount65 < 1 &&  classExamFailCount50 < 1 && classExamFailCount65 < 1  ? <p>The students are doing great</p> : ''} 
                </div>
            </div>           
        </div>

    )

    

}

export default ClassPerformance;