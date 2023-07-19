/*
// Default tab
$(".tab").css("display", "none");
$("#tab-1").css("display", "block");
$("#step-1").addClass("active");

function navigateToStep(step) {
  // Validate if press next button
  if (step > 1) {
    var currentTab = step - 1;
    x = $("#tab-" + currentTab);
    y = $(x).find("input[required]");
    var errorMessages = "";
    for (i = 0; i < y.length; i++) {
      if (y[i].value == "") {
        var fieldName = $(y[i]).attr("name");
        $("#" + fieldName + "-error").html(fieldName + " is required.");
        errorMessages += fieldName + " is required.<br>";
      }
    }
    if (errorMessages !== "") {
      return false;
    }
  }

  // Progress bar
  $(".step").removeClass("active");
  for (i = 1; i <= step; i++) {
    $("#step-" + i).addClass("active");
  }

  // Clear error messages
  $(".error-message").html("");

  // Switch tab
  $(".tab").css("display", "none");
  $("#tab-" + step).css("display", "block");
  $("input").css("background", "#fff");
}
*/


  // Default tab
  $(".tab").css("display", "none");
  $("#tab-1").css("display", "block");
  $("#step-1").addClass("active");

  function navigateToStep(step) {
    // Progress bar
    $(".step").removeClass("active");
    for (i = 1; i <= step; i++) {
      $("#step-" + i).addClass("active");
    }

    // Clear error messages
    $(".error-message").html("");

    // Switch tab
    $(".tab").css("display", "none");
    $("#tab-" + step).css("display", "block");
    $("input").css("background", "#fff");
  }

