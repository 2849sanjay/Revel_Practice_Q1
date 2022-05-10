const jwt = require("jsonwebtoken");
const config = require("../configs/auth.config");
const user = require("../models/user.model");
const constants = require("../utils/constants");

// Authentication

// if the tocken passed is valid or no

// 1. if no tocken is passed in the request header - Not allowed
// 2. if tocken is passed : Authenticated
// if correct allow, else reject

verifyToken = (req,res,next)=>{

// read the token from header

const token = req.headers['x-access-token'];

if(!token){
    return res.status(403).send({
        message : "No token provided"
    })
}


// if the passed access token is of ADMIN or not

isAdminOrRecruiter = async (req,res, next) =>{

// Check what is user type

if(user && (user.usertype == constants.userType.admin || user.userType == constants.userType.recruiter)){
 next();   
} else {
    res.status(403).send({
        message: "require ADMIN/RECRUITER role"
    })
}
}

const authJwt = {
    verifyToken : verifyToken,
    isAdminOrRecruiter : isAdminOrRecruiter
};

module.exports = authJwt;


















