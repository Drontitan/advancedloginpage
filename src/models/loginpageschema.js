const mongoose =require('mongoose')

const studentSchema =new mongoose.Schema({

     firstname:{
         type:String,
     },
     lastname:{
         type:String,
     },
     emailid:{
         type:String,
         unique:true,
         required:true,
     },
     password:{
         type:String,
         required:true,
     },
     confirmpassword:{
         type:String,
         required:true,
     },

})

const Register = new mongoose.model("Register", studentSchema);

module.exports = Register;