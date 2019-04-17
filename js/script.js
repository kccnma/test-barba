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
      console.log("fading out?");
      return new Promise(function (resolve, reject) {
        window.setTimeout(function () {
          resolve();
          console.log("resolved?");
        }, 1000);
      });
    },

    fadeIn: function () {
      this.newContainer.classList.toggle('fade-in');
      console.log("fading in?");
      this.done();
    }
  });

  Barba.Pjax.getTransition = function () {
    return FadeTransition;
  };
});
