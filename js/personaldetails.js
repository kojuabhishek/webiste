function toggleInputFields() {
  var maritalStatus = document.querySelector(
    'input[name="marital-status"]:checked'
  ).value;
  var spouseDetails = document.getElementById("spouse-details");

  if (maritalStatus === "married") {
    spouseDetails.style.display = "block";
  } else {
    spouseDetails.style.display = "none";
  }
}
