function toggleDropdownDisplay() {
    var x = document.querySelector(".sub-menu");
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function toggleDropdownRecipeDetail() {
  var x = document.querySelector(".dropdown-menu-recipe-details");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}