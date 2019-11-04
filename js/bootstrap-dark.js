const btn = document.getElementById('switch-theme');
btn.addEventListener('click',(e)=>{
     if(btn.checked){
          document.documentElement.setAttribute('data-theme','dark');
     }
     else {
          document.documentElement.removeAttribute('data-theme');
     }
});