'use strict';
// select elements 
const formEl = document.getElementById('form');
const usernameEl = document.getElementById('username');
const emailEl = document.getElementById('email');
const mobileEl = document.getElementById('mobile');
const newpasswordEl = document.getElementById('new-password');
const confirmpasswordEl = document.getElementById('confirm-password');

//functions 



//events  
//add event listener
formEl.addEventListener('submit', (e)=>{e.preventDefault();
if(usernameEl.value === ''){
  const formControlEl = usernameEl.parentElement;
  formControlEl.classList = 'form-control error';
  }
  else{
    const formControlEl = usernameEl.parentElement;
    formControlEl.classList = 'form-control success';
  }
  if(emailEl.value === ''){
    const formControlEl = emailEl.parentElement;
    formControlEl.classList= 'form-control error';
    }
    else{
      const formControlEl = emailEl.parentElement;
      formControlEl.classList ='form-control success';
    }
    if(mobileEl.value === ''){
      const formControlEl = mobileEl.parentElement;
      formControlEl.classList= 'form-control error';
      }
      else{
        const formControlEl = mobileEl.parentElement;
        formControlEl.classList ='form-control success';
      }
      if(newpasswordEl.value === ''){
        const formControlEl = newpasswordEl.parentElement;
        formControlEl.classList= 'form-control error';
        }
        else{
          const formControlEl = newpasswordEl.parentElement;
          formControlEl.classList ='form-control success';
        }
        if(confirmpasswordEl.value === ''){
          const formControlEl = confirmpasswordEl.parentElement;
          formControlEl.classList= 'form-control error';
          }
          else{
            const formControlEl = confirmpasswordEl.parentElement;
            formControlEl.classList ='form-control success';
          }
});
