window.addEventListener("load", function(){
    const navButton = document.querySelector(".nav-header__button");
    const navIcon = document.querySelectorAll(".nav-header__icon");
    const navMobile = document.querySelector(".nav-header--mobile");

    const toggleMobileMenu = function(opacity, visibility, transform) {
        navMobile.style.opacity = opacity;
        navMobile.style.visibility = visibility;
        navMobile.style.transform = `translateY(${transform}rem)`;
    };

    const toggleIcon = function() {
        navIcon.forEach((icon) => {
            if(icon.classList.contains("js-icon-hidden")) {
                icon.classList.remove("js-icon-hidden");
            } else {
                icon.classList.add("js-icon-hidden");
            }
        });
    };

    const mobileMenuHandler = function(e) {
        const iconClicked = e.target;

        if(iconClicked.classList.contains("js-icon-open")) {
            toggleMobileMenu(1, "visible", 0);
        } else if (iconClicked.classList.contains("js-icon-close")) {
            toggleMobileMenu(0, "hidden", -4);
        }

        toggleIcon();
    }
    
    navButton.addEventListener("click", mobileMenuHandler);
});  