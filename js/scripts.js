/* From https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_topnav */
function myFunction() {
	/* Grab the header */
    var x = document.getElementById("header");
    /* If not responsive, make it responsive */
    if (x.className === "topnav") {
        x.className += " responsive";
    /* Otherwise, remove responsiveness */
    } else {
        x.className = "topnav";
    }
}