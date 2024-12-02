//getting the modal
//var modal = document.getElementById("myModal");

//Getting the button that opens modal
//var btn = document.getElementById("myBtn");

//getting span element to close modal
//var span = document.getElementsByClassName("close")[0];

//getting the modal
let modal = document.getElementById("myModal");

//Getting the button that opens modal
let btn = document.getElementById("myBtn");

//getting the modal
let span = document.getElementsByClassName("close")[0];



//when clicked open modal
btn.onclick = function() {
    modal.style.display = "block";
}

//when clicked close modal
span.onclick = function() {
    modal.style.display = "none";
}

//when clicked outside close modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
