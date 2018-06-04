$(document).ready(function(){
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip(); 
  
  // Add smooth scrolling to all links in navbar + footer link
  $(".col-sm-3 a, .navbar a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
})

$(window).scroll(function() {
    $(".slideanim").each(function(){
        var pos = $(this).offset().top;
        var winTop = $(window).scrollTop();
        if (pos < winTop + 700) {
            $(this).addClass("slider");
        }
    });
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 250) {
    $('.logo').addClass('riduci');
  } else {
    $('.logo').removeClass('riduci');
  }
});


$(".descrTrapani .readmore").click(function(){
    $(".descrTrapani .readmore").hide(); 
    $(".descrTrapani br").hide();
    $(".trapanimore").show();
});
$(".descrErice .readmore").click(function(){
    $(".descrErice .readmore").hide();
    $(".descrErice br").hide();
    $(".ericemore").show();
});
$(".descrCornino .readmore").click(function(){
    $(".descrCornino .readmore").hide();
    $(".descrCornino br").hide();
    $(".corninomore").show();
});
$(".descrPizzolungo .readmore").click(function(){
    $(".descrPizzolungo .readmore").hide();
    $(".descrPizzolungo br").hide();
    $(".pizzolungomore").show();
});
$(".descrLidovalderice .readmore").click(function(){
    $(".descrLidovalderice .readmore").hide();
    $(".descrLidovalderice br").hide();
    $(".lidovaldericemore").show();
});
$(".descrSanvito .readmore").click(function(){
    $(".descrSanvito .readmore").hide();
    $(".descrSanvito br").hide();
    $(".sanvitomore").show();
});