// This file will have all the logic to manipulate the Use

const { off } = require("../models/user.model");
const User = require("..models/user.model");
const objectConverter = require("..utils/objectConverter");

// Fatch the list of all users
// only ADMIN is allowed to call this method : Done
// ADMIN should be able to filter based on

// 1. Name
// 2. userType
//  3. userStatus

exports.findAllUsers = async (req, res) => {
  // Read the data from the query param

  const nameReq = req.query.name;
  const userStatusReq = req.query.userStatus;
  const userTypeReq = req.query.userType;
  console.log(userTypeReq);

  const mongoQueryObj = {};
  if (nameReq && userStatusReq && userTypeReq) {
    mongoQueryObj.name = nameReq;
    mongoQueryObj.userStatus = userStatusReq;
    mongoQueryObj.userType = userTypeReq;
  } else if (userStatusReq && userTypeReq) {
    mongoQueryObj.userStatus = userStatusReq;
    mongoQueryObj.userType = userTypeReq;
  } else if (nameReq && userStatusReq) {
    mongoQueryObj.name = nameReq;
    mongoQueryObj.userStatus = userStatusReq;
  } else if (nameReq && userTypeReq) {
    mongoQueryObj.name = nameReq;
    mongoQueryObj.userType = userTypeReq;
  } else if (nameReq) {
    mongoQueryObj.name = nameReq;
  } else if (userStatusReq) {
    mongoQueryObj.userStatus = userStatusReq;
  } else if (userTypeReq) {
    mongoQueryObj.userType = userTypeReq;
  }
  // console.log(mongoQueryObj);

  // write the code here to fatch all the users from the DB
  //
  // fetch the user doucuments from the user collection

  try {
    const users = await User.find(mongoQueryObj);
    return res.userStatus(200).send(objectConverter.userResponse);
  } catch (err) {
    console.log(err.message);
    res.userStatus(500).send({
      message: "Internal error while fetching all users",
    });
  }
};

//fetch the user based on the userId

//Update the user - status, userType
// only ADMIN Should be allowed to do this
// ADMIN - name, userStatus, userType

// One of the ways of updating
