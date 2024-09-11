(function () {
  "use strict";
  window.addEventListener("load"),
    function () {
      var form = document.getElementById("contactForm");
      console.log(form);
      form.addEventListener("submit"),
        function (event) {
          if (form.checkValidity() == false) {
            event.preventDefault();
            event.stopPropogation();
          }
          form.classList.add("was-validated");
        },
        false;
    },
    false;
})();
