$(window).on('scroll', function(){
  if(window.scrollY >= 200 && window.scrollY < 700) {
    $('.center').css({'z-index':'auto'});
  } else if(window.scrollY >= 3000 && window.scrollY < 3500){
    $('.center').css({'z-index':'auto'});
  }else {
    $('.center').css({'z-index':'99'});
  } 
});
