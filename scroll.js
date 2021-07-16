window.addEventListener('scroll', function(){
    let header = document.getElementById('header');
    let windowPosition= window.scrollY;

    if(windowPosition<10){
        header.classList.toggle('scrolling-inactive', windowPosition)
    }
   else{
       header.classList.toggle('scrolling-active', windowPosition)
   }
})