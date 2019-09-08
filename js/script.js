
new WOW().init();
$(function(){
  
   var scrollLink = $('.scrolltab');
  scrollLink.click(function(e) {
    e.preventDefault();

    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });


  $(window).scroll(function(){
      if($(this).scrollTop() > 300){
        $("#backtotop").removeClass("hideunhide");  
      }
      else{
        $("#backtotop").addClass("hideunhide");  
      }
    
      var sec1 = $("#sec_1").offset().top;
      var win = $(window).scrollTop();

      if(win >= sec1 ){
        $(".navbar").addClass("animateBar");
       // $(".animateimg").removeClass("animateimages");
      }
      else{
        $(".navbar").removeClass("animateBar");
        //$(".animateimg").addClass("animateimages");
      }
      
      
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {
      
      var sectionOffset = $(this.hash).offset().top - 20;
      
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        
      }
    });
    
  })
      $("#backtotop").click(function(){
        $('body,html').animate({
          scrollTop: 0
        }, 1000 );
      });

      // collapse
      var coll = document.getElementsByClassName("collapsible");
      var i;
      
      for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var content = this.nextElementSibling;
          if (content.style.maxHeight){
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
          }
        });
      }
  
});