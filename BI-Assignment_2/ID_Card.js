function create() {
  let Name = document.getElementById("Name").value;
  let CName = document.getElementById("CName").value;
  let Location = document.getElementById("Location").value;

  document.getElementById("NameValue").innerHTML = `Name : ${Name}`;
  document.getElementById("CollegeValue").innerHTML = `C Name : ${CName}`;
  document.getElementById("LocationValue").innerHTML = `Location : ${Location}`;

  document
    .getElementById("Img")
    .setAttribute(
      "src",
      "https://c4.wallpaperflare.com/wallpaper/90/583/800/1tomjerry-animation-cartoon-cat-wallpaper-preview.jpg"
    );

  let ID = document.getElementById("ID_Card");
  if (ID.className == "child2_child") {
    ID.className = "child2_updatechild";
    // alert("true")
  } else {
    alert("try again ");
  }
}

// cannot input the browse feature in our assignement as we are not done with the jQuery YET!!
