
$(window).on('scroll', function(){
  if(window.scrollY >= 160 && window.scrollY < 700) {
    $('.center').css({'z-index':'auto'});
  } else if(window.scrollY >= 3500 && window.scrollY < 4000){
    $('.center').css({'z-index':'auto'});
  }else {
    $('.center').css({'z-index':'99'});
  } 
});


