var menus = [ "home", "educations", "skills", "diploma", "portfolio", "nightschool" ] ;

function setActive(menu) {
    for (var i=0 ; i < menus.length ; i++) {
        if (menu == menus[i]) {
            $("#"+menu).addClass('active') ;
        } else {
            $("#"+menus[i]).removeClass('active') ;
        }
    }
}