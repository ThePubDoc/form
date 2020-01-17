const dbConn = require("../database/db.js"); 
const User = dbConn.User; 

function form(req,res){
    const {name, phno, email} = req.body;
    User.create({
        name,
        email,
        phno
    })
    .then(result  => {
        res.redirect("/submited")
    })
    .catch(err => {
        console.log(err)
    })
}

module.exports = {
    form : form
}