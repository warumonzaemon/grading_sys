const router = require('express').Router();
const User = require('../models/user');

const bcrypt = require('bcrypt');

/* const auth = require('../authenticate'); */

router.get( '/', /* auth.verify,  */(req,res) => {
    User.find().then(data => {
        res.send(data)
    });
})

router.post( '/email-exists', (req,res) => {
    User.findOne({email: req.body.checkThisEmail}).then(data => {
        if(data) { 
            res.send(true);
        } else {
            res.send(false);
        }
    });
});

router.post( '/user-id-exists', (req,res) => {
    User.findOne({userId: req.body.userId}).then(data => {
        if(data) { 
            res.send(true);
        } else {
            res.send(false);
        }
    });
});

router.post( '/get-user-data', (req,res) => {
    User.findOne({userId: req.body.userId}).then(data => {
        res.send(data);
    });
});

router.post('/register', async (req, res) => {
    let hashedPwd = await bcrypt.hash( req.body.password, 10);
    let user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        middleName: req.body.middleName,
        userId: req.body.userId,
        email: req.body.email,
        role: req.body.role,
        gradeLevel: req.body.gradeLevel,
        section: req.body.section,
        password: hashedPwd
    };

    let newUser = new User(user);
    newUser.save().then(data => {
        res.send("User has been create");
    });
});

router.post( '/login', (req, res) => {
    User.findOne( { userId: req.body.userId }).then( async (data) => {
        if( data ){
            let match = await bcrypt.compare( req.body.password, data.password );

            // Check if password matches with the found user
            if( match ){ res.send(data); }
            else{ res.send({ error: "Invalid credentials" }); }
        }else{
            // Nothing found on the FindOne
            res.send({ error: "User ID not found" });
        }
    });
});

module.exports = router;

