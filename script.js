'use strict';
// select elements 
const formEl = document.getElementById('form');
const usernameEl = document.getElementById('username');
const emailEl = document.getElementById('email');
const mobileEl = document.getElementById('mobile');
const newpasswordEl = document.getElementById('new-password');
const confirmpasswordEl = document.getElementById('confirm-password');

//functions 
const inputElArrays =[usernameEl, emailEl,
mobileEl,
newpasswordEl,
confirmpasswordEl,
];

const showError = function (el,message) {
  const formControlEl = el.parentElement;
  formControlEl.className = 'form-control error';
  const smallEl = formControlEl.querySelector('small');
  smallEl.textContent = message;
};


const showSuccess = function (el) {
  const formControlEl= el.parentElement;
  formControlEl.className = 'form-control success ';
};

const checkRequiredInput = function(arr){
  for(const el of arr) {
if (el.value === '') {
showError(el, `${el.name} is required`);
}else{
 showSuccess(el);
}
}
};
const checkLength = function (el,min,max) {
  if (el.value.length < min) {
   showError(el,`${el.name} should have ${min} characters`); 

  }else if (el.value.length > max) {
showError(el, `${el.name} should not be more than ${max} characters`);
  } else {
    showSuccess(el);
  }
};



const passwordMatch = function (elone,elTwo) {
if (elone.value ==='' || elTwo.value === '')
  {
  showError(elone,'new password is mandatory');
   showError(elTwo, 'Confirm password is mandatory');
  } else {
  if (elone.value === elTwo.value) {
  showSuccess(elone);
  showSuccess(elTwo);

  } else {
  
  showError(elone, 'Password do not match'); 
  showError(elTwo, 'Password do not match'); 
  
  }
}
};



formEl.addEventListener('submit',(e)=>{
e.preventDefault();
checkRequiredInput(inputElArrays);
checkLength(usernameEl,5,10);
checkLength(mobileEl,10,10);
checkLength(newpasswordEl,10,10);
passwordMatch(newpasswordEl,confirmpasswordEl);

}
);



//events  
//add event listener



// ******************************basic addEventListener code (with hydration  method  written below the function heading up  ************************* 



// formEl.addEventListener('submit', (e)=>{e.preventDefault();
// if(usernameEl.value === ''){
//   const formControlEl = usernameEl.parentElement;
//   formControlEl.classList = 'form-control error';
//   }
//   else{
//     const formControlEl = usernameEl.parentElement;
//     formControlEl.classList = 'form-control success';
//   }
//   if(emailEl.value === ''){
//     const formControlEl = emailEl.parentElement;
//     formControlEl.classList= 'form-control error';
//     }
//     else{
//       const formControlEl = emailEl.parentElement;
//       formControlEl.classList ='form-control success';
//     }
//     if(mobileEl.value === ''){
//       const formControlEl = mobileEl.parentElement;
//       formControlEl.classList= 'form-control error';
//       }
//       else{
//         const formControlEl = mobileEl.parentElement;
//         formControlEl.classList ='form-control success';
//       }
//       if(newpasswordEl.value === ''){
//         const formControlEl = newpasswordEl.parentElement;
//         formControlEl.classList= 'form-control error';
//         }
//         else{
//           const formControlEl = newpasswordEl.parentElement;
//           formControlEl.classList ='form-control success';
//         }
//         if(confirmpasswordEl.value === ''){
//           const formControlEl = confirmpasswordEl.parentElement;
//           formControlEl.classList= 'form-control error';
//           }
//           else{
//             const formControlEl = confirmpasswordEl.parentElement;
//             formControlEl.classList ='form-control success';
//           }
// });
