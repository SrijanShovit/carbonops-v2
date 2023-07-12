const { response } = require("express");
const userModel = require("../models/allUsers");

const findUserByEmail = async (email)=>{
    try {
        const users = await userModel.find({ email });
         return users;
      } catch (error) {
        console.error('Error occurred while searching:', error);
      }
}

const createUser = async (data)=>{
    try{
    const newDoc = new userModel(data);
  const user = await userModel.create(newDoc)
    .then((res)=>{
        console.log(res)
          return res;
    }).catch((err)=>{
        return {status: "error", err}
    })
    return user;
    
    }catch(err){
        console.error('Error occurred while searching:', err);
    }
}

const dbMethods = {
    findUserByEmail,
    createUser
}

module.exports = dbMethods;
