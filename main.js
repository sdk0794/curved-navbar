let y = window.pageYOffset;

let logo = document.getElementsByClassName('logo')[0];

let nav = document.getElementsByTagName('nav')[0];

window.addEventListener("scroll", function(e){
    let new_y = window.pageYOffset;
    //console.log(y , new_y);
    if(new_y > y){
        console.log("Scroll Down");
        logo.style.display = "none";
        nav.style.height = "100px";
        nav.style.borderRadius = "0px";
        
    }else if(new_y == 0){
        console.log("TOP");
        logo.style.display = "block";
        nav.style.height = "150px";
        nav.style.borderRadius = "0 0 50% 50%";
    }else {
        console.log("Scroll UP");
        
    }
    y = new_y;
    //console.log(e);
});