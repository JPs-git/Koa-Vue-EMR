const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateRegistInput(data){
  let errors = {}

  if(!Validator.isLength(data.name, {min: 2, max :30})){
    errors.name = '名字的长度不能小于2位，且不能超过30位'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}