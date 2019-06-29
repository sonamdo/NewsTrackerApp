const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({//define user schema
  name: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    validate(value){
      if(value.toLowerCase().includes('password')){
        throw new Error('Your password contains password? Really?')
      }
    }
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)){
        throw new Error('Invalid Email Address')
      }
    }
  },
  following: {
    type: Array
  },
  savedArticles: {
    type: Array
  }
})

userSchema.pre('save', async function (next) {
  console.log('user saved')

  next()
})

const User = mongoose.model('User', userSchema)

module.exports = User
