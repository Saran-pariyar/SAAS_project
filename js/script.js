ham_icon = document.getElementsByClassName("ham-icon");
nav_list = document.getElementById("nav-list");


const showMenu = () => {
    if (nav_list.style.left == "-20%") {
        nav_list.style.left = "-100%";
        
    }
    else {
        nav_list.style.left = "-20%"

    }
}

