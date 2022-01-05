

$(document).ready(function () {
    $(".filter").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all") {
            $(".project-card").show(500);
        }
        else {
            $(".project-card").not("." + value).hide(500);
            $(".project-card").filter("." + value).show(500);
        }
    });
    // add active class to buttons

    $(".filter").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    })
})



const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
            }
        });

        burger.classList.toggle("toggle");
    });
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}


navSlide();







