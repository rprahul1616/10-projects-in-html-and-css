/*============ light to dark OR dark to light mode ============*/

let darkModeIcon = document.querySelector('#darkMode-icon');


darkModeIcon.onclick =()=>{
  darkModeIcon.classList.toggle('bx-sun')
  document.body.classList.toggle('darkMode-on')
};

