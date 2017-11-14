(function() {

  function Slideshow( element ) {
    this.el = document.querySelector( element );
    this.init();
  }

  Slideshow.prototype = {
    init: function() {
      this.wrapper = this.el.querySelector( ".slider-wrapper" );
      this.slides = this.el.querySelectorAll( ".slide" );
      this.previous = this.el.querySelector( ".slider-previous" );
      this.next = this.el.querySelector( ".slider-next" );
      this.dots = this.el.querySelectorAll('.dot');
      this.dotsWrap = this.el.querySelector('.dots');

      this.index = 0;
      this.total = this.slides.length;
      this.timer = null;

      this.action();
      this.stopStart();
    },
    _slideTo: function( slide ) {
      var currentSlide = this.slides[slide];
      currentSlide.style.opacity = 1;
      var dot = document.createElement('SPAN');
      dot.className = 'dot';
      for( var i = 0; i < this.total; i++ ) {
        var slide = this.slides[i];
        if( slide !== currentSlide ) {
          slide.style.opacity = 0;
        }
        if (this.dots.length < 1) {
          console.log(this.dots.length)
          for (var d = 0; d < this.total; d++) {
            this.dotsWrap.appendChild(dot.cloneNode())
          }
          this.dots = this.el.querySelectorAll('.dot');
        }
      }
    },
    action: function() {
      var self = this;
      self.timer = setInterval(function() {
        self.index++;
        if( self.index == self.slides.length ) {
          self.index = 0;
        }
        self._slideTo( self.index );

      }, 3000);
    },
    stopStart: function() {
      var self = this;
      self.el.addEventListener( "mouseover", function() {
        clearInterval( self.timer );
        self.timer = null;

      }, false);
      self.el.addEventListener( "mouseout", function() {
        self.action();

      }, false);
    },
    onDotHandle: function () {
      var self = this;
    }


  };

  document.addEventListener( "DOMContentLoaded", function() {

    var slider = new Slideshow( "#main-slider" );

  });


})();
