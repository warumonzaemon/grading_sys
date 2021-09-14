const router = require('express').Router();

const ObjectId = require("bson-objectid");
const StudentGrades = require('../models/studentGrades');

router.get( '/', (req,res) => {
    StudentGrades.find().then(data => {
        res.send(data)
    });
})

/* To check if student record already existing */
router.post( '/user-id-exists', (req,res) => {
    StudentGrades.findOne({userId: req.body.userId}).then(data => {
        if(data) { 
            res.send(true);
        } else {
            res.send(false);
        }
    });
});

/* To add new student record */
router.post('/new-student', (req, res) => {
    let record = {
        userId: req.body.userId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        middleName: req.body.middleName,
        writtenWorks: [],
        writtenWorksPSWS: {totalScore: 0, totalHPS: 0, percentageScore:0, weightedScore: 0},
        performanceTasks: [],
        performanceTasksPSWS: {totalScore: 0, totalHPS: 0, percentageScore:0, weightedScore: 0},
        majorExams: [],
        majorExamsPSWS: {totalScore: 0, totalHPS: 0, percentageScore:0, weightedScore: 0},
        finalGrade: {initialGrade: 0, quarterlyGrade: 0}
    };

    let newRecord = new StudentGrades(record);
    newRecord.save().then(data => {
        res.send("Record has been create");
    });
});


/* To get the individual student data */
router.get( '/get-student-data/:id', (req, res) => {
    StudentGrades.find( {userId :req.params.id } ).then( (data) => {
        res.send(data);
        }
    );
});


router.post('/add-score', (req,res) => {
    let score = {
        /* _id: ObjectId(), */
        topic: req.body.topic,
        score: req.body.score,
        HPS: req.body.HPS
    }

    if(req.body.activity === 'writtenWorks' ) {
        StudentGrades.findOneAndUpdate({userId:req.body.userId}, {$addToSet: { writtenWorks: score }}).then(data => {
            res.send(data);
        })
    } else if (req.body.activity === 'performanceTasks' ) {
        StudentGrades.findOneAndUpdate({userId:req.body.userId}, {$addToSet: { performanceTasks: score }}).then(data => {
            res.send(data);
        })
    } else if (req.body.activity === 'majorExams' ) {
        StudentGrades.findOneAndUpdate({userId:req.body.userId}, {$addToSet: { majorExams: score }}).then(data => {
            res.send(data);
        }) }
    
    
        
    
    
})

module.exports = router;

