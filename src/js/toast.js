// snackbar
function myFunction() {
    //getting snackbar
    var x = document.getElementById("snackbar");

    //add show to div
    x.className = "show";

    //remove show after 3 seconds
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}