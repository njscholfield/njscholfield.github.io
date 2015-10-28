var icount = 0;

function confirm() {
  setTimeout(function() {
    if (icount > 1) {
      $("#success").removeClass("hidden");
      document.getElementById("contact-form").reset();
      icount = 1;
    }
    else{
      $("#failure").removeClass("hidden");
    }
  }, 500);

  setTimeout(function() {
    $("#success").addClass("hidden");
    $("#failure").addClass("hidden");
  }, 3000);
};
