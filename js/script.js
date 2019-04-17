document.addEventListener("DOMContentLoaded", function () {
  // BARBA: Init
  Barba.Pjax.start();

  var FadeTransition = Barba.BaseTransition.extend({
    start: function () {
      Promise.all([this.newContainerLoading, this.fadeOut()]).then(
        this.fadeIn.bind(this)
      );
    },

    fadeOut: function () {
      this.oldContainer.classList.toggle('fade-out');
      this.oldContainer.classList.remove('fade-in');
      return new Promise(function (resolve, reject) {
        window.setTimeout(function () {
          resolve();
        }, 500);
      });
    },

    fadeIn: function () {
      this.newContainer.classList.toggle('fade-in');
      window.scrollTo(0, 0);
      this.done();
    }
  });

  Barba.Pjax.getTransition = function () {
    return FadeTransition;
  };

});
