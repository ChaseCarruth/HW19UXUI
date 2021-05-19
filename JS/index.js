console.log("index working correctly");

$(document).ready(function () {
  $("#resume").click(function () {
    $("#resume").animate({
      left: "180px",
      top: "550px",
      opacity: "80%",
    });
  });
});

$(document).ready(function () {
  $("#resume").click(function () {
    $("#resume").append("Thanks for downloading!");
  });
});
