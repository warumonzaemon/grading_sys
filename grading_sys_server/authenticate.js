// const jwt = require('jsonwebtoken');
// const secret = 'ningnongs';

// const createAccessToken = user => {
//     let data = {
//         firstName:      user.firstName,
//         lastName:       user.lastName,
//         middleName:     user.middleName,
//         userId:         user.userId,
//         email:          user.email,
//         gradeLevel:     user.gradeLevel,
//         section:        user.section
//     }

//     return jwt.sign(data, secret );

// }

// const verify = (req, res, next) => {
//     /* let token = req.headers.authentication.slice(7, req.headers.authentication.length); */
//     if(!req.headers.authorization) {res.send("No token")} 
//     else {
//         let token = req.headers.authorization.split("")[1];
//         if (typeof token != 'undefined') {
//             return jwt.verify(token, secret, (err, decoded) => {
//                 console.log(decoded);
//                 console.log(err);
//                 return err ? res.send("Invalid Token") : next();
//             })
//         } else {
//             return false
//         }
//     }
    
// }

// module.exports = {createAccessToken, verify }