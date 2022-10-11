document.addEventListener("DOMContentLoaded", swapTheme);

function swapTheme() {
  let baseUrl = "https://www.tfaforms.com/uploads/themes/theme-";
  let newref = baseUrl + getSocietyTheme() + ".css";
  let mySheet = document.querySelector(`link[href^="${baseUrl}"]`);
  mySheet.href = newref;
}

function getSocietyTheme() {
  console.debug("Swapping theme")
  let societiesThemes = {
    Glaz: "83308",
    Nortia: "83310",
    Default: "68007",
    Perial: "83308"
  };
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  societyName = urlParams.get("account");
  if (!societiesThemes.hasOwnProperty(societyName)) {
    console.warn(
      "No theme found, reverting back to default theme " + societyName
    );
    return societiesThemes["Default"];
  } else {
    return societiesThemes[societyName];
  }
}
