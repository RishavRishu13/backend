const {data} = require("../users.json");
// const getQueryErrors = require("../middlewares/validators/users.validators");

const getUsers = (req,res) => {
    res.send(data);
}

const getUserbyFilter = (req,res) => {
    const {gender, age} = req.query

    // const error = getQueryErrors({gender,age});
    // if(error){
    //     return res.status(422).json(error)
    // }

    if(gender && age){

        const userArray = data.filter((item) =>{
            // console.log(`Name is ${item.name.first} Gender is ${item.dob.age} and gender is ${item.gender}`)
            if(item.gender === gender && item.dob.age === Number(age)){
                // console.log("founded")
                return item
            }
        })
        res.json(userArray)
    }
    else if(gender){
        const genderArray = data.filter((item) => item.gender === gender);
        res.json(genderArray)
    }

    else if(age){
        const ageArray = data.filter((item) => item.dob.age === Number(age))
        res.json(ageArray)
    }
    // else{
    //     res.status(422).json({
    //         message : "Missing Search Parameters, search using age and/or gender"
    //     })
    // }

}

const getUserOnLoginId = (req,res) => {
    // console.log("inUserid")
    const {uuid:LoginId} = req.params;
    // console.log(LoginId)
    const user = data.find((item) => {
        // console.log(`login id is ${item.login.uuid} and login id is ${LoginId}`)
        return item.login.uuid === LoginId
    })

    user? res.status(200).send(user) : res.status(404).send("User does not exist")
    
}

module.exports = {
    getUsers,
    getUserbyFilter,
    getUserOnLoginId
}