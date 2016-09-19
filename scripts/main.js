var controller = new ScrollMagic.Controller();

var now,min,hour;
var H1,H2,M1,M2;
//Date and Time APP:
var digital_represent = {
  zero: [1,1,1,1,0,1,1],
  one: [0,0,0,0,0,1,1],
  two: [0,1,1,1,1,1,0],
  three: [0,0,1,1,1,1,1],
  four: [1,0,0,0,1,1,1],
  five: [1,0,1,1,1,0,1],
  six: [1,1,1,1,1,0,1],
  seven: [0,0,0,1,0,1,1],
  eight: [1,1,1,1,1,1,1],
  nine: [1,0,0,1,1,1,1]
}

setInterval(updateTime, 1500);

function updateTime() {
  now = new Date();
  hour = now.getHours().toString();
  min = now.getMinutes().toString();

if (hour.length == 1){
  H1 = 0;
  h2 = hour;
}
else {
  H1 = hour.slice(0,1);
  H2 = hour.slice(1);
}

if (min.length == 1){
  M1 = 0;
  M2 = min;
}
else {
  M1 = min.slice(0,1);
  M2 = min.slice(1);
}



  //display H1,H2,M1,M2:

  //H1:
  switch (H1) {
    case '0':
      display('#H-1-',digital_represent.zero);
      break;
    case '1':
      display('#H-1-',digital_represent.one);
      break;
    case '2':
      display('#H-1-',digital_represent.two);
      break;
    default:
      display('#H-1-',digital_represent.zero);
      break;
  }

  switch (H2) {
    case '0':
      display('#H-2-',digital_represent.zero);
      break;
    case '1':
      display('#H-2-',digital_represent.one);
      break;
    case '2':
      display('#H-2-',digital_represent.two);
      break;
    case '3':
      display('#H-2-',digital_represent.three);
      break;
    case '4':
      display('#H-2-',digital_represent.four);
      break;
    case '5':
      display('#H-2-',digital_represent.five);
      break;
    case '6':
      display('#H-2-',digital_represent.six);
      break;
    case '7':
      display('#H-2-',digital_represent.seven);
      break;
    case '8':
      display('#H-2-',digital_represent.eight);
      break;
    case '9':
      display('#H-2-',digital_represent.nine);
      break;
    default:
      display('#H-2-',digital_represent.zero);
      break;
  }

  switch (M1) {
    case '0':
      display('#M-1-',digital_represent.zero);
      break;
    case '1':
      display('#M-1-',digital_represent.one);
      break;
    case '2':
      display('#M-1-',digital_represent.two);
      break;
    case '3':
      display('#M-1-',digital_represent.three);
      break;
    case '4':
      display('#M-1-',digital_represent.four);
      break;
    case '5':
      display('#M-1-',digital_represent.five);
      break;
    case '6':
      display('#M-1-',digital_represent.six);
      break;
    case '7':
      display('#M-1-',digital_represent.seven);
      break;
    case '8':
      display('#M-1-',digital_represent.eight);
      break;
    case '9':
      display('#M-1-',digital_represent.nine);
      break;
    default:
      display('#M-1-',digital_represent.zero);
      break;
  }

  switch (M2) {
    case '0':
      display('#M-2-',digital_represent.zero);
      break;
    case '1':
      display('#M-2-',digital_represent.one);
      break;
    case '2':
      display('#M-2-',digital_represent.two);
      break;
    case '3':
      display('#M-2-',digital_represent.three);
      break;
    case '4':
      display('#M-2-',digital_represent.four);
      break;
    case '5':
      display('#M-2-',digital_represent.five);
      break;
    case '6':
      display('#M-2-',digital_represent.six);
      break;
    case '7':
      display('#M-2-',digital_represent.seven);
      break;
    case '8':
      display('#M-2-',digital_represent.eight);
      break;
    case '9':
      display('#M-2-',digital_represent.nine);
      break;
    default:
      display('#M-2-',digital_represent.zero);
      break;
  }
}



//JQuery:
$(function(){
  //Global Variables:



  var screen_size = $(window).height();
  var height = $('body').height() - screen_size;

  //Find the proper lengths of Triangle levels and 'hide' them
  var path = document.querySelector('#T-1');
  var length = path.getTotalLength();
  $('#T-1').css({
    strokeDasharray: length,
    strokeDashoffset: length});

  path = document.querySelector('#T-2');
  length = path.getTotalLength();
  $('#T-2').css({
    strokeDasharray: length,
    strokeDashoffset: length});

  path = document.querySelector('#T-3');
  length = path.getTotalLength();
  $('#T-3').css({
  strokeDasharray: length,
  strokeDashoffset: length});

  path = document.querySelector('#T-4');
  length = path.getTotalLength();
  $('#T-4').css({
    strokeDasharray: length,
    strokeDashoffset: length});

  path = document.querySelector('#T-5');
  length = path.getTotalLength();
  $('#T-5').css({
    strokeDasharray: length,
    strokeDashoffset: length});

  path = document.querySelector('#T-6');
  length = path.getTotalLength();
  $('#T-6').css({
    strokeDasharray: length,
    strokeDashoffset: length});

  path = document.querySelector('#T-7');
  length = path.getTotalLength();
  $('#T-7').css({
    strokeDasharray: length,
    strokeDashoffset: length});

  path = document.querySelector('#a-t-a');
  length = path.getTotalLength();
  $('#a-t-a').css({
    strokeDasharray: length,
    strokeDashoffset: length});

  path = document.querySelector('#envelope-run');
  length = path.getTotalLength();
  $('#envelope-run').css({
    strokeDasharray: length,
    strokeDashoffset: length
  });

  path = document.querySelector('#envelope-run-det-1');
  length = path.getTotalLength();
  $('#envelope-run-det-1').css({
    strokeDasharray: length,
    strokeDashoffset: length
  });

  path = document.querySelector('#envelope-run-det-2');
  length = path.getTotalLength();
  $('#envelope-run-det-2').css({
    strokeDasharray: length,
    strokeDashoffset: length
  });

  path = document.querySelector('#envelope-run-det-3');
  length = path.getTotalLength();
  $('#envelope-run-det-3').css({
    strokeDasharray: length,
    strokeDashoffset: length
  });

  path = document.querySelector('#d-t-p-1');
  length = path.getTotalLength();
  $('#d-t-p-1').css({
    strokeDasharray: length,
    strokeDashoffset: length
  });

  path = document.querySelector('#d-t-p-2');
  length = path.getTotalLength();
  $('#d-t-p-2').css({
    strokeDasharray: length,
    strokeDashoffset: length
  });

  path = document.querySelector('#male');
  length = path.getTotalLength();
  $('#male').css({
    strokeDasharray: length,
    strokeDashoffset: length
  });

  path = document.querySelector('#bottom-swivel');
  length = path.getTotalLength();
  $('#bottom-swivel').css({
    strokeDasharray: length,
    strokeDashoffset: length
  });

  path = document.querySelector('#bottom-triangles');
  length = path.getTotalLength();
  $('#bottom-triangles').css({
    strokeDasharray: length,
    strokeDashoffset: length
  });

  path = document.querySelector('#stairway');
  length = path.getTotalLength();
  $('#stairway').css({
    strokeDasharray: length,
    strokeDashoffset: length
  });

  path = document.querySelector('#stairs-finish');
  length = path.getTotalLength();
  $('#stairs-finish').css({
    strokeDasharray: length,
    strokeDashoffset: length
  });

  path = document.querySelector('#finale');
  length = path.getTotalLength();
  $('#finale').css({
    strokeDasharray: length,
    strokeDashoffset: length
  });



  //Scenes
  var scene = new ScrollMagic.Scene({triggerElement: 'body', triggerHook: 'onLeave', duration: height})
          .setTween(TweenMax.to('#progress-bar', 1,{
            backgroundSize: '7px 100%' }))
          .addTo(controller);

  var scene2 = new ScrollMagic.Scene({triggerElement: '.nav-bar', triggerHook: 'onLeave', duration: 0, offset:screen_size-60})
          .setPin('#nav-bar')
          .addTo(controller);

  //parallaxParent
  var scene_parallax = new ScrollMagic.Scene({triggerElement: '#parallax', triggerHook: 'onEnter', duration: '300%'})
				.setTween(TweenMax.to('#p-mustache', 1,{y: '50%', ease: Linear.easeNone}))
				.addTo(controller);

  var scene = new ScrollMagic.Scene({triggerElement: '#signature-connor', triggerHook: 'onEnter', offset: '50'}).on('enter', function() {
    $('#Connor').css({visibility:'visible'});
    var $svg = $('#Connorsvg').drawsvg({

      duration: 900,
      stagger: 250
    });

      $svg.drawsvg('animate');
    })
    .on('leave', function(){
      $('#Connor').css({visibility:'hidden'});
    })
    .addTo(controller);


  //ABOUT INTRO:
  var scene = new ScrollMagic.Scene({triggerElement: '#AboutMeLogo', triggerHook: 'onEnter', duration: 350,})
  .setTween(TweenMax.to('#a-t-a', 1,{strokeDashoffset: 0, ease: Linear.easeNone}))
  .addTo(controller);

  var scene = new ScrollMagic.Scene({triggerElement: '#about-cover', triggerHook: 'onEnter'})
  .setPin('#background-horiz-spinner')
  .addTo(controller);
  //
  var scene = new ScrollMagic.Scene({triggerElement: '#g-c-2', triggerHook: 'onEnter', duration: 1000})
  .setTween(TweenMax.to('#g-c-L', 1,{rotation: 1080, transformOrigin: '28.35px, 28.55px', ease: Linear.easeNone}))
  .addTo(controller);
  var scene = new ScrollMagic.Scene({triggerElement: '#g-c-2', triggerHook: 'onEnter', duration: 1000})
  .setTween(TweenMax.to('#g-c-1', 1,{rotation: -1080, transformOrigin: '28.35px, 28.55px', ease: Linear.easeNone}))
  .addTo(controller);
  var scene = new ScrollMagic.Scene({triggerElement: '#g-c-2', triggerHook: 'onEnter', duration: 1000})
  .setTween(TweenMax.to('#g-c-2', 1,{rotation: -1080, transformOrigin: '28.35px, 28.55px', ease: Linear.easeNone}))
  .addTo(controller);


  var scene = new ScrollMagic.Scene({triggerElement: '#Left-Scroll-Wheel', triggerHook: 'onEnter', offset: 298})
  .setPin('#left-background-horiz-spinner')
  .addTo(controller);

  var scene = new ScrollMagic.Scene({triggerElement: '#Left-Scroll-Wheel', triggerHook: 'onEnter', offset: 298})
  .setPin('#right-background-horiz-spinner')
  .addTo(controller);

  var scene = new ScrollMagic.Scene({triggerElement: '#AboutMeLogo', triggerHook: 'onEnter', duration: 600, offset: 500})
  .setTween(TweenMax.to('#envelope-run', 1,{strokeDashoffset: 0, ease: Linear.easeNone}))
  .addTo(controller);

  var scene = new ScrollMagic.Scene({triggerElement: '#AboutMeLogo', triggerHook: 'onEnter', duration: 80, offset: 1000})
  .setTween(TweenMax.to('#envelope-run-det-1', 1,{strokeDashoffset: 0, ease: Linear.easeNone}))
  .addTo(controller);

  var scene = new ScrollMagic.Scene({triggerElement: '#AboutMeLogo', triggerHook: 'onEnter', duration: 80, offset: 1020})
  .setTween(TweenMax.to('#envelope-run-det-2', 1,{strokeDashoffset: 0, ease: Linear.easeNone}))
  .addTo(controller);

  var scene = new ScrollMagic.Scene({triggerElement: '#AboutMeLogo', triggerHook: 'onEnter', duration: 80, offset: 1040})
  .setTween(TweenMax.to('#envelope-run-det-3', 1,{strokeDashoffset: 0, ease: Linear.easeNone}))
  .addTo(controller);

  var scene = new ScrollMagic.Scene({triggerElement: '#Envelope_1_', triggerHook: 'onLeave', duration: 200, offset: 300})
  .setTween(TweenMax.to('#d-t-p-1', 1,{strokeDashoffset: 0, ease: Linear.easeNone}))
  .addTo(controller);

  var scene = new ScrollMagic.Scene({triggerElement: '#Envelope_1_', triggerHook: 'onLeave', duration: 200, offset: 500})
  .setTween(TweenMax.to('#d-t-p-2', 1,{strokeDashoffset: 0, ease: Linear.easeNone}))
  .addTo(controller);

  var scene = new ScrollMagic.Scene({triggerElement: '#Envelope_1_', triggerHook: 'onLeave', duration: 200, offset: 700})
  .setTween(TweenMax.to('#male', 1,{strokeDashoffset: 0, ease: Linear.easeNone}))
  .addTo(controller);

  var scene = new ScrollMagic.Scene({triggerElement: '#Envelope_1_', triggerHook: 'onLeave', duration: 300, offset: 900})
  .setTween(TweenMax.to('#bottom-swivel', 1,{strokeDashoffset: 0, ease: Linear.easeNone}))
  .addTo(controller);

  var scene = new ScrollMagic.Scene({triggerElement: '#Envelope_1_', triggerHook: 'onLeave', duration: 175, offset: 1200})
  .setTween(TweenMax.to('#bottom-triangles', 1,{strokeDashoffset: 0, ease: Linear.easeNone}))
  .addTo(controller);

  var scene = new ScrollMagic.Scene({triggerElement: '#quote-text', triggerHook: 'onEnter', duration: 350, offset: 100})
  .setTween(TweenMax.to('#stairway', 1,{strokeDashoffset: 0, ease: Linear.easeNone}))
  .addTo(controller);

  var scene = new ScrollMagic.Scene({triggerElement: '#quote-text', triggerHook: 'onEnter', duration: 300, offset: 450})
  .setTween(TweenMax.to('#stairs-finish', 1,{strokeDashoffset: 0, ease: Linear.easeNone}))
  .addTo(controller);

  var scene = new ScrollMagic.Scene({triggerElement: '#quote-text', triggerHook: 'onEnter', duration: 175, offset: 130})
  .setTween(TweenMax.to('#finale', 1,{strokeDashoffset: 0, ease: Linear.easeNone}))
  .addTo(controller);


  //TRIANGLES:

  var scene = new ScrollMagic.Scene({triggerElement: '#Triangles', triggerHook: 'onEnter', duration: 385,})
  .setTween(TweenMax.to('#T-1', 1,{strokeDashoffset: 0, ease: Linear.easeNone}))
  .addTo(controller);

  var scene = new ScrollMagic.Scene({triggerElement: '#Triangles', triggerHook: 'onEnter', duration: 600,})
  .setTween(TweenMax.to('#T-2', 1,{strokeDashoffset: 0, ease: Linear.easeNone}))
  .addTo(controller);

  var scene = new ScrollMagic.Scene({triggerElement: '#Triangles', triggerHook: 'onEnter', duration: 550,})
  .setTween(TweenMax.to('#T-3', 1,{strokeDashoffset: 0, ease: Linear.easeNone}))
  .addTo(controller);

  var scene = new ScrollMagic.Scene({triggerElement: '#Triangles', triggerHook: 'onEnter', duration: 500,})
  .setTween(TweenMax.to('#T-4', 1,{strokeDashoffset: 0, ease: Linear.easeNone}))
  .addTo(controller);

  var scene = new ScrollMagic.Scene({triggerElement: '#Triangles', triggerHook: 'onEnter', duration: 450,})
  .setTween(TweenMax.to('#T-5', 1,{strokeDashoffset: 0, ease: Linear.easeNone}))
  .addTo(controller);

  var scene = new ScrollMagic.Scene({triggerElement: '#Triangles', triggerHook: 'onEnter', duration: 400,})
  .setTween(TweenMax.to('#T-6', 1,{strokeDashoffset: 0, ease: Linear.easeNone}))
  .addTo(controller);

  var scene = new ScrollMagic.Scene({triggerElement: '#Triangles', triggerHook: 'onEnter', duration: 350,})
  .setTween(TweenMax.to('#T-7', 1,{strokeDashoffset: 0, ease: Linear.easeNone}))
  .addTo(controller);

  //CLICKS:


  $('#home-tag').click(() => {
                $('html, body').animate({
                    scrollTop: $('#home').offset().top
                }, 750);
            });

  $('#about-tag').click(() => {
                $('body').css({overflow: 'visible'});
                $('html, body').animate({
                    scrollTop: $('#about').offset().top
                }, 750);
            });

  $('#portfolio-tag').click(() => {
                $('body').css({overflow: 'visible'});
                $('html, body').animate({
                    scrollTop: $('#portfolio').offset().top -75
                }, 750);
            });

  $('#resume-tag').click(() => {
                $('body').css({overflow: 'visible'});
                $('html, body').animate({
                    scrollTop: $('#resume').offset().top -64
                }, 750);
            });

  $('#contact-tag').click(() => {
                $('body').css({overflow: 'visible'});
                $('html, body').animate({
                    scrollTop: $('#contact').offset().top
                }, 750);
            });

  var CoverSvgs = ['#cover1-svg','#cover2-svg','#cover3-svg', '#cover4-svg', '#cover5-svg', '#cover6-svg', '#cover7-svg'];

  $('#right-clicker').click(() => {
    //fadeOut clickers
    $('#left-clicker').fadeOut(0);
    $('#right-clicker').fadeOut(0);
    //if statements (find the right svg) ->
    //hide svg -> load next SVG -> fadeIn() clickers
    for (var i = 0; i < CoverSvgs.length; i++){
      if ( $(CoverSvgs[i]).css('display') == 'inline-block') {
        var x = i+1;

        if ( x == CoverSvgs.length ) {
          x = 0;
        }

        if (CoverSvgs[x] == '#cover1-svg') {
          $('.wide-load').css({'fill-opacity': '0'});
        }
        $(CoverSvgs[i]).css({display:'none'});
        $(CoverSvgs[x]).css({display:'inline-block'});
        if (CoverSvgs[x] == '#cover6-svg'){
          animateSVG(CoverSvgs[x], 3000, 1500);
        }
        else if (CoverSvgs[x] == '#cover7-svg'){
          animateSVG(CoverSvgs[x],2000);
        }
        else {
          animateSVG(CoverSvgs[x]);
        }
        break;
      }
    }

  });

  $('#left-clicker').click(() => {
    //fadeOut clickers
    $('#left-clicker').fadeOut(0);
    $('#right-clicker').fadeOut(0);
    //if statements (find the left svg) ->
    //hide svg -> load next SVG -> fadeIn() clickers
    for (var i = 0; i < CoverSvgs.length; i++){
      if ( $(CoverSvgs[i]).css('display') == 'inline-block') {
        var x = i - 1;

        if ( x < 0) {
          x = CoverSvgs.length - 1;
        }

        if (CoverSvgs[x] == '#cover1-svg') {
          $('.wide-load').css({'fill-opacity': '0'});
        }
        $(CoverSvgs[i]).css({display:'none'});
        $(CoverSvgs[x]).css({display:'inline-block'});
        if (CoverSvgs[x] == '#cover6-svg'){
          animateSVG(CoverSvgs[x], 3000, 1500);
        }
        else if (CoverSvgs[x] == '#cover7-svg'){
          animateSVG(CoverSvgs[x],2000);
        }
        else {
          animateSVG(CoverSvgs[x]);
        }
        break;
      }
    }
  });



  //SVGs:

  //begin
  var $svgCover = $('#cover1-svg').drawsvg({
      callback: function() {
        TweenLite.to('.wide-load', 1.5, { 'fill-opacity': '1' });
        TweenLite.to('.words', 3, { 'fill-opacity': '1' });
        //$(".wide-load").css({'fill-opacity': "1.0"});
        $('#left-clicker').fadeIn(1000);
        $('#right-clicker').fadeIn(1000);
      },
      duration: 700,
      stagger: 75
    });
    $svgCover.drawsvg('animate');







});

function animateSVG (idTag,dur,stagger) {
  var $svgCover = $(idTag).drawsvg({
      callback: function() {
        if (idTag == '#cover1-svg') {
          TweenLite.to('.wide-load', 1.5, { 'fill-opacity': '1' });
        }
        $('#left-clicker').fadeIn(1000);
        $('#right-clicker').fadeIn(1000);
      },
      duration: dur || 700,
      stagger: stagger || 75
    });
    $svgCover.drawsvg('animate');
}

function display (css_value,value_to_be) {
  for (var i = 0; i < 7; i++){
    if (value_to_be[i] === 0){
      $(css_value + (i+1)).css({fill:'#EDDBCC'});
    }
    else {
      $(css_value + (i+1)).css({fill:'#C69F73'});
    }
  }
}
