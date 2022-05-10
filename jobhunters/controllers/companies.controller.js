const User = require("../models/user.model");
const constants = require("../utils/constants");
const Company = require("../company.models");

 // Create a company - company 
 // v1 - Any one should be able to create the ticket 

 exports.addCompany = async (req,res)=>{

    // logic to create the ticket

    const companyObj = {
     name :  req.body.name,
     address : req.body.address,
     jobPosted : []
    }

    try {
     const company = await Company.create(companyObj);
     console.log(company);
return Response.status(201).send(company);

    } catch (err){
        console.log(err.message);
        return res.status(500).send({
            message : "Some internal error"
        })
    }
    
 }

 exports.getAllCompanies = async (req,res) =>{

  const companies = await Company .findout();
  res.status(200).send (companies)
 }

 exports.getOneCompany = async (req,res)=>{
     const company = await Company.findOne({
         _id: req.params.id
     });
     console.log(company);

if(company == null){
    return res.status(200).send({
        message: "Comapny does't exist"
    })
}

// Update the attributes of the saved company

company.name = req.body.name != undefined ? req.body.name : company.name;
company.address = req.body.address !=undefined ? req.body.address : company.address;
company.verified = req.body.verified != undefined ? req.body.verified : company.verified;
company.jobPosted = req.body.jobPosted != undefined ? req.body.jobPosted : company.jobPosted;

const updatedCompany =  await company.save();

// return the update ticket

return res.status(200).send (updatedCompany);

 }

 exports.deleteCompany = async (req,res)=> {
     try {
         const company = await Company.deleteOne({
             _id: req.params._id

         });
         res.status(200).send (company)

     } catch (err){
         console.log(err.message);
         return res.status(500).send({
             message: "Some internal error"

         })
     }}

