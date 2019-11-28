$(document).ready(function(){

  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();

//this is left
 $('.left').each(function(){

    //build a scene
  var ourScene12 = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 1,
      reverse: true
  })
  .setClassToggle(this, 'fade-in') //add class to section1-pic
  .addTo(controller);
  });

 //this is mask
 $('.right').each(function(){

    //build a scene
  var ourScene12 = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 1,
      reverse: true
  })
  .setClassToggle(this, 'fade-in') //add class to section1-pic
  .addTo(controller);
    });

   var parallaxScene = new ScrollMagic.Scene({
       triggerElement:'body',
       triggerHook:1,
       duration:'180%'
   })
   .setTween(TweenMax.from('.right', 1.5, {y: '-12%', ease:Power0.easeNone}))
   .addTo(controller);


 //this is footleft
 $('.foot-top-middle').each(function(){

    //build a scene
  var ourScene16 = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.8,
      reverse: true
  })
  .setClassToggle(this, 'fade-in') //add class to section1-pic
  .addTo(controller);
  });

 //this is foodbgtxt
 $('.foot-top-right').each(function(){

    //build a scene
  var ourScene17 = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.8,
      reverse: true
  })
  .setClassToggle(this, 'fade-in') //add class to section1-pic
  .addTo(controller);
  });

 $('.right-bar').each(function(){

    //build a scene
  var ourScene17 = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: .8,
      reverse: true
  })
  .setClassToggle(this, 'fade-in') //add class to section1-pic
  .addTo(controller);
  });
  
  var parallaxScene = new ScrollMagic.Scene({
       triggerElement:'body',
       triggerHook:1,
       duration:'180%'
   })
   .setTween(TweenMax.from('.right-bar', 1, {y: '120%', ease:Power0.easeNone}))
   .addTo(controller);

});

