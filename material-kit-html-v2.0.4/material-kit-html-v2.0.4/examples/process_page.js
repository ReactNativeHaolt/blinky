function clicked_button(clicked_id){
    if(clicked_id=="personal_button" || clicked_id=="activity_button"){
        var x = document.getElementById("buttons_of_type");
        var y = document.getElementById("buttons_of_amount");
        if (x.style.display === "none") {
            x.style.display = "block";
            y.style.display = "none"
        } else {
            x.style.display = "none";
            y.style.display = "block";
        }
    }
}