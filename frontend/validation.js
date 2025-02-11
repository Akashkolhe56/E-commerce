const validationFormObject={
    validateName:(name)=>{
        const nameRegex = /^[a-zA-Z][a-zA-Z\s'-]{1,49}$/;
        if (name.lenght<2) {
            return 'Name cannot have less then 2 letters'
        }
        if(!nameRegex.test(name)){
            return 'Name should not have any symbols'
        }
        return true;

    },
    validatePassword:(password)=>{
        const passwordRegex = {
            minLength: 8,
            maxLength: 128,
            hasUpperCase: /[A-Z]/,
            hasLowerCase: /[a-z]/,
            hasSpecialChar: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, // Fixed unnecessary escapes
          };
          if(password.length<passwordRegex.minLength){
            return 'Password should be more than or equal to 8 chars'
          }
          if(password.length>passwordRegex.maxLength){
            return 'Password should be less than or equal to 128 chars'
          }
          if(!passwordRegex.hasUpperCase.test(password)){
            return 'Password should have at least one uppercase letter'
          }
          if(!passwordRegex.hasLowerCase.test(password)){
            return 'Password should have at least one lowercase letter'
          }
          if(!passwordRegex.hasSpecialChar.test(password)){
            return 'Password should have atleast 1 spl char'
          }
          return true;
    
    },
    validateEmail:(email)=>{
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(email.lenght>254){
            return{isValid:false,error:'Email too long'}
        }
        if(!emailRegex.test(email)){
            return 'Write the email in the correct format'
        }
        return true;
    }
}
export default validationFormObject;