/*function ctznDatePicker() {
  var mainInput1 = document.getElementById("ctzn-bs");
  mainInput1.nepaliDatePicker();
}

function dobDatePicker() {
  var mainInput2 = document.getElementById("dob-bs");
  mainInput2.nepaliDatePicker();
}

$("#dob-ad").on("change", function () {
  var copiedValue = $(this).val();
  // Split the dateOfBirthValue using the forward slash (/) delimiter
  var dateParts = copiedValue.split("-");
  var year = dateParts[0];
  var month = dateParts[1];
  var day = dateParts[2];
  console.log(year);
  console.log(month);
  console.log(day);
  var adDate = DateConverter(year, month, day);
  var bsDate = adDate.convertToBS().toBSString();
  console.log(bsDate);
  $("#dob-bs").val(bsDate);
  console.log("Copied value: " + copiedValue);
});

$("#dob-bs").on("change", function () {
  var copiedValue = $(this).val();
  console.log(copiedValue);
  // Split the dateOfBirthValue using the forward slash (/) delimiter
  var dateParts = copiedValue.split("-");
  var day = dateParts[2];
  var year = dateParts[0];
  var month = dateParts[1];
  console.log(year);
  console.log(month);
  console.log(day);

  var bsDate = DateConverter(year, month, day);
  var adDate = bsDate.convertToAD().toADString();
  console.log(adDate);
  $("#dob-ad").val(adDate);
  console.log("Copied value1: " + copiedValue);
});

$("#ctzn-ad").on("change", function () {
  var copiedValue = $(this).val();
  // Split the dateOfBirthValue using the forward slash (/) delimiter
  var dateParts = copiedValue.split("-");
  var year = dateParts[0];
  var month = dateParts[1];
  var day = dateParts[2];
  console.log(year);
  console.log(month);
  console.log(day);
  var adDate = DateConverter(year, month, day);
  var bsDate = adDate.convertToBS().toBSString();
  console.log(bsDate);
  $("#ctzn-bs").val(bsDate);
  console.log("Copied value: " + copiedValue);
});

$("#ctzn-bs").on("change", function () {
  var copiedValue = $(this).val();
  console.log(copiedValue);
  // Split the dateOfBirthValue using the forward slash (/) delimiter
  var dateParts = copiedValue.split("-");
  var day = dateParts[2];
  var year = dateParts[0];
  var month = dateParts[1];
  console.log(year);
  console.log(month);
  console.log(day);

  var bsDate = DateConverter(year, month, day);
  var adDate = bsDate.convertToAD().toADString();
  console.log(adDate);
  $("#ctzn-ad").val(adDate);
  console.log("Copied value1: " + copiedValue);
}); */

// Your existing functions
function ctznDatePicker() {
  var mainInput1 = document.getElementById("ctzn-bs");
  mainInput1.nepaliDatePicker();
}

function dobDatePicker() {
  var mainInput2 = document.getElementById("dob-bs");
  mainInput2.nepaliDatePicker();
}

// Call the functions on document ready
$(document).ready(function () {
  ctznDatePicker();
  dobDatePicker();

  // Event handlers
  $("#dob-ad").on("change", function () {
    var copiedValue = $(this).val();
    // Split the dateOfBirthValue using the hyphen (-) delimiter
    var dateParts = copiedValue.split("-");
    var year = dateParts[0];
    var month = dateParts[1];
    var day = dateParts[2];
    console.log(year);
    console.log(month);
    console.log(day);
    var adDate = DateConverter(year, month, day);
    var bsDate = adDate.convertToBS().toBSString();
    console.log(bsDate);
    $("#dob-bs").val(bsDate);
    console.log("Copied value: " + copiedValue);
  });

  $("#dob-bs").on("change", function () {
    var copiedValue = $(this).val();
    console.log(copiedValue);
    // Split the dateOfBirthValue using the hyphen (-) delimiter
    var dateParts = copiedValue.split("-");
    var day = dateParts[2];
    var year = dateParts[0];
    var month = dateParts[1];
    console.log(year);
    console.log(month);
    console.log(day);

    var bsDate = DateConverter(year, month, day);
    var adDate = bsDate.convertToAD().toADString();
    console.log(adDate);
    $("#dob-ad").val(adDate);
    console.log("Copied value1: " + copiedValue);
  });

  $("#ctzn-ad").on("change", function () {
    var copiedValue = $(this).val();
    // Split the dateOfBirthValue using the hyphen (-) delimiter
    var dateParts = copiedValue.split("-");
    var year = dateParts[0];
    var month = dateParts[1];
    var day = dateParts[2];
    console.log(year);
    console.log(month);
    console.log(day);
    var adDate = DateConverter(year, month, day);
    var bsDate = adDate.convertToBS().toBSString();
    console.log(bsDate);
    $("#ctzn-bs").val(bsDate);
    console.log("Copied value: " + copiedValue);
  });

  $("#ctzn-bs").on("change", function () {
    var copiedValue = $(this).val();
    console.log(copiedValue);
    // Split the dateOfBirthValue using the hyphen (-) delimiter
    var dateParts = copiedValue.split("-");
    var day = dateParts[2];
    var year = dateParts[0];
    var month = dateParts[1];
    console.log(year);
    console.log(month);
    console.log(day);

    var bsDate = DateConverter(year, month, day);
    var adDate = bsDate.convertToAD().toADString();
    console.log(adDate);
    $("#ctzn-ad").val(adDate);
    console.log("Copied value1: " + copiedValue);
  });
});
