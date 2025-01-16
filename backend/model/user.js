const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Please enter your name!"]
    },
    email: {
        type: String,
        required: [true,"Please enter your email!"]
    },
    password: {
        type: String,
        required: [true,"Please enter your password!"],
        minLength:[4,"Password should be greater then 4 character!"],
        select:false
    },
    phoneNumber:{
        type:Number,
        maxLength:[10,"don't exceed more then 10 digit"]
    },
    addresses:[
        {
            country:{
                type:String
            },
            city:{
                type:String
            },
            address1:{
                type:String
            },
            address2:{
                type:String
            },
            zipCode:{
                type:Number
            },
            addressType:{
                type:String
            },
        }
    ],
    role:{
        type:String,
        default:"user",
    },
    avatar:{
        public_id:{
            type:String,
            required:true,
        },
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    resetPasswordToken:String,
    resetPasswordTime:Date,
});

//hash password

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {next();}
    this.password = await bcrypt.hash(this.password, 10);
  });
  
  //json webtoken
  
  userSchema.methods.getJywtToken = function () {return jwt.sign({ id: this_id },process.env.JWT_SECRT_KEY,{expiresIn:process.env.JWT_EXPIRES,})
  }

  //COMPARE PASSWORD
  userSchema.methods.comparePassword =async function (enteredPassword){return await bcrypt.compare(enteredPassword, this.password);}

  module.exports=mongoose.model('User',userSchema)
