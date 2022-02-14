function myFunction() {
    var z = window.matchMedia("(max-width: 981px)")
    if (z.matches) {
        var x = document.getElementsByClassName("clicks");
        var t = document.getElementsByClassName("nav_holder")
        if(t[0].style.height == "100%"){
            t[0].style.height = "5%";
        }
        else{
            t[0].style.height = "100%";
        }
        for (let index = 0; index < x.length; index++) {
            if (x[index].style.display === "block") {
                x[index].style.display = "none";
            } else {
                x[index].style.display = "block";
            }
        }
        
    }
}