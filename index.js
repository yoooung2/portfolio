
$(window).on('scroll', function(){
  if(window.scrollY >= 160 && window.scrollY < 700) {
    $('.center').css({'z-index':'auto'});
  } else if(window.scrollY >= 3200 && window.scrollY < 3800){
    $('.center').css({'z-index':'auto'});
  }else {
    $('.center').css({'z-index':'99'});
  } 
});


