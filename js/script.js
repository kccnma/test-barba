document.addEventListener("DOMContentLoaded", function() {
  // BARBA: Init
  Barba.Pjax.start();

  var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
      Promise.all([this.newContainerLoading, this.fadeOut()]).then(
        this.fadeIn.bind(this)
      );
    },

    fadeOut: function() {
      $(this.oldContainer).toggleClass("fade-out");

      return new Promise(function(resolve, reject) {
        window.setTimeout(function() {
          resolve();
        }, 100);
      });
    },

    fadeIn: function() {
      $(this.newContainer).toggleClass("fade-in");
      this.done();
    }
  });

  Barba.Pjax.getTransition = function() {
    return FadeTransition;
  };
});
