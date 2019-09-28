function myFunction() {
    var x = document.getElementById("mytopnav");
    if (x.className === "mynav") {
      x.className += " responsive";
    } else {
      x.className = "mynav";
    }
  }