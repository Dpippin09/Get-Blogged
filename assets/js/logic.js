const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');


let mode = 'dark';


themeSwitcher.addEventListener('click', function () {
  
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light-theme');
    themeSwitcher.textContent = "Dark Mode";
  }
 
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark-theme');
    themeSwitcher.textContent = "Light Mode";
  }
});
