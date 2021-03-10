$(function () {
  var granimInstance = new Granim({
    element: '#canvas-image-blending',
      name:'#canvas-wrapper',
    elToSetClassOn:'div',
    direction: 'radial',
    isPausedWhenNotInView: true,
    image : {
        source: '../images/discount/discount-bgr.jpg',
        position: ['center', 'bottom'],
        stretchMode: ['stretch', 'stretch-if-bigger'],
        blendingMode: 'difference',
    },
    states : {
        "default-state": {
            gradients: [
                // ['#29323c', '#485563'],
                // ['#FF6B6B', '#556270'],
                // ['#80d3fe', '#7ea0c4'],
                // ['#f0ab51', '#eceba3']
                ['#EB3349', '#F45C43'],
                ['#FF8008', '#FFC837'],
                ['#4CB8C4', '#3CD3AD'],
                ['#24C6DC', '#514A9D'],
                ['#FF512F', '#DD2476'],
                ['#DA22FF', '#9733EE']
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

  new WOW().init()
});