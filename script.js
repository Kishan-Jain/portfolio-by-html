function toggleMenu() {
    var x = document.querySelectorAll(".responce-list");
    x.forEach((val) =>{
        if (val.className === "responce-list") {
            val.className += " responce-list-on";
        } else {
            val.className = "responce-list";
        }
    })
    
}