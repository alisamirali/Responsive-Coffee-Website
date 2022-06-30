/* Loader */
onload = () => {
    const load = document.getElementById("loader");

    setTimeout(() => {
        load.style.display = "none";
    }, 2000);
};

/* Show Menu */
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/* Remove Menu On Click Nav Link */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* Change Header Bg */
const scrollHeader = () => {
    const header = document.getElementById("header");
    this.scrollY >= 50 ?
        header.classList.add("scroll-header") :
        header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

/* Mixitup Filter */
let mixerProducts = mixitup(".products__content", {
    selectors: {
        target: ".products__card",
    },
    animation: {
        duration: 300,
    },
});

/* Default Filter Products */
mixerProducts.filter(".delicacies");

/* Link Active Products */
const linkProducts = document.querySelectorAll(".products__item");

function activeProduct() {
    linkProducts.forEach((link) => link.classList.remove("active-products"));
    this.classList.add("active-products");
}

linkProducts.forEach((link) => link.addEventListener("click", activeProduct));

/* Show Scroll Up */
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");
    this.scrollY >= 350 ?
        scrollUp.classList.add("show-scroll") :
        scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/* Scroll Sections Active Link */
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id"),
            sectionsClass = document.querySelector(
                ".nav__menu a[href*=" + sectionId + "]"
            );

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add("active-link");
        } else {
            sectionsClass.classList.remove("active-link");
        }
    });
};
window.addEventListener("scroll", scrollActive);