
  $(function(){
    var navbar = $('.header-inner');
    $(window).scroll(function(){
      if($(window).scrollTop() <=100){
        navbar.removeClass('navbar-scroll');
      }else{
        navbar.addClass('navbar-scroll');
      }
    });

     $('#m_click').click(function () {
        
         $('#addclass').css({'right':'0','transition':'.5s'})
          
     });

     $('#r_class').click(function () {
        
        $('#addclass').css({'right':'-288px','transition':'.5s'})
         
    });

    $('#in').click(function(){
      $('#register').show()
    });


    
    $('#sho').click(function(){
      $('#register').hide()
    });

    $('#register_btn').click(function(){
      $('#register').hide()
    });
    

    
    $('#up').click(function(){
      $('#login').show()
    });


    
    $('#show').click(function(){
      $('#login').hide()
    });

    $('#login_btn').click(function(){
      $('#login').hide()
    });

    $('#a').click(function(){
        $('#login').show()
      });
  
    
      $('#b').click(function(){
        $('#register').show()
      });

    
  });



  
  




  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    autoplay:1000,
})




wow = new WOW(
  {
    animateClass: 'animated',
    offset:       100,
    callback:     function(box) {
      console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
  }
);
wow.init();
document.getElementById('moar').onclick = function() {
  var section = document.createElement('section');
  section.className = 'section--purple wow fadeInDown';
  this.parentNode.insertBefore(section, this);
};