jQuery(window).scroll(function(){
    var fromTopPx = 1200; // distance to trigger
    var scrolledFromtop = jQuery(window).scrollTop();
    if(scrolledFromtop > fromTopPx){
        jQuery('body').addClass('members');
      }else{
        jQuery('body').removeClass('members');
      }
    if(scrolledFromtop > fromTopPx + 1100){
        jQuery('body').addClass('tickets');
        jQuery('body').removeClass('members')
      }else{
        jQuery('body').removeClass('tickets');
      }
    if(scrolledFromtop > fromTopPx + 2600){
        jQuery('body').addClass('liveboys');
        jQuery('body').removeClass('tickets')
      }else{
        jQuery('body').removeClass('liveboys');
      }
    if(scrolledFromtop > fromTopPx + 5400){
        jQuery('body').addClass('bands');
        jQuery('body').removeClass('liveboys')
      }else{
        jQuery('body').removeClass('bands');
      }



    // }else{
    //     jQuery('body').removeClass('members');
    // }
});




//TOOLTIP HOVER
// var tooltips = document.querySelectorAll('.tooltip span');

// window.onmousemove = function (e) {
//     var x = (e.clientX - 0) + 'px',
//         y = (e.clientY - 500) + 'px';

//     for (var i = 0; i < tooltips.length; i++){
//       tooltips[i].style.top = y;
//       tooltips[i].style.left = x;
//     }
// };

