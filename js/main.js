
const btnDarkMode = document.querySelector(".dark-mode-btn");

 if (localStorage.getItem('darkMode') === 'dark') {
   btnDarkMode.classList.add("dark-mode-btn--active");
   document.body.classList.add("dark");
 }

// Проверка тёмной темы на уровне системных настроек

 if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
 }

//  2. Проверка тёмной темы  в  localStorage

if (localStorage.getItem('darkMode') === 'dark') {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");


} else {

  btnDarkMode.classList.remove("dark-mode-btn--active");
  document.body.classList.remove("dark");
}
 

//   Если меняются системнын настройки, меняем тему 
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
   const newColorScheme = event.matches ? "dark" : 'light';


    alert('Change !!!');


   if (newColorScheme === 'dark') {

    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
    // обращаемся к localStorage
    localStorage.setItem("darkMode", "dark"); 

   }  else {

    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
    localStorage.setItem("darkMode", "light"); 
   }
});






// включение ночного режима
btnDarkMode.onclick = function () {
  btnDarkMode.classList.toggle("dark-mode-btn--active");
  const isDark = document.body.classList.toggle('dark');


   if (isDark) {
    localStorage.setItem('darkMode', 'dark');

   }  else {
    localStorage.setItem('darkMode', 'light');
   }
}