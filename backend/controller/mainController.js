const dbConn = require("../database/db.js"); 
const User = dbConn.User; 


function homepage(req,res){
    res.render("form")
}

function submited(req,res){
    res.render("submited")
}

module.exports = {
    homepage : homepage,
    submited : submited
}