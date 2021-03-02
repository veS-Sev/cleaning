$(function () {
  var granimInstance = new Granim({
    element: '#canvas-image-blending',
    elToSetClassOn:'#canvas-wrapper',
    direction: 'radial',
    isPausedWhenNotInView: true,
    image : {
        source: '../images/discount/discount-bgr.jpg',
        blendingMode: 'difference',
    },
    states : {
        "default-state": {
            gradients: [
                ['#29323c', '#485563'],
                ['#FF6B6B', '#556270'],
                ['#80d3fe', '#7ea0c4'],
                ['#f0ab51', '#eceba3']
            ],
            transitionSpeed: 3000
        }
    }

    
});


  const swiper = new Swiper('.swiper-container', {
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

  });


});