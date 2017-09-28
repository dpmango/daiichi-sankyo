$(document).ready(function(){

  var scene = document.getElementById('scene');

  var parallax = new Parallax(scene, {
    relativeInput: true
  });

  parallax.scalar(20, 20);

  $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })


});//end ready
