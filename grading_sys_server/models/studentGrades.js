const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentGradesSchema = new Schema({
    userId: String,
    firstName:  String,
    lastName:   String,
    middleName: String,
    writtenWorks: Array,
    writtenWorksPSWS: Object,
    performanceTasks: Array,
    performanceTasksPSWS: Object,
    majorExams: Array,
    majorExamsPSWS: Object,
    finalGrade: Object
});

module.exports = mongoose.model('studentGrades', StudentGradesSchema);