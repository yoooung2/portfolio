const p = document.querySelector('p');
    addEventListener('scroll', () => {
      if(window.pageYOffset > 300) {
        p.classList.add('on');
      } 
      else {
        p.classList.remove('on');
      }
    });
