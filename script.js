
window.onload = function () {

    function close() {
        document.getElementById("temp").style.display = "none";
    }

    console.log("outside");

    
    document.getElementById("close-btn").addEventListener("click", close);
}



