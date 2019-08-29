

$(function(){
   var scrollLink = $('.scrolltab');
  scrollLink.click(function(e) {
    e.preventDefault();

    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });


  $(window).scroll(function(){

    
      var sec1 = $("#sec_1").offset().top;
      var win = $(window).scrollTop();

      if(win >= sec1 ){
        $(".navbar").addClass("animateBar");
        $(".animateimg").removeClass("animateimages");
      }
      else{
        $(".navbar").removeClass("animateBar");
        $(".animateimg").addClass("animateimages");
      }
      
      
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {
      
      var sectionOffset = $(this.hash).offset().top - 20;
      
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        
      }
    })
  })

  
});