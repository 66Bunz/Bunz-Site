

$(document).ready(function () {
    $(".filter").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all") {
            $(".project-card").show(50);
        }
        else {
            $(".project-card").not("." + value).hide(50);
            $(".project-card").filter("." + value).show(50);
        }
    });
    // add active class to buttons

    $(".filter").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    })
})




$(document).ready(function () {
    $(".mondainestop2go-filter").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all") {
            $(".mondainestop2go-content-page").show(50);
        }
        else {
            $(".mondainestop2go-content-page").not("." + value).hide(50);
            $(".mondainestop2go-content-page").filter("." + value).show(50);
        }
    });
    // add active class to buttons

    $(".mondainestop2go-filter").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    })
})



$(document).ready(function () {
    $(".dailyquotesdroptop-filter").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all") {
            $(".dailyquotesdroptop-content-page").show(50);
        }
        else {
            $(".dailyquotesdroptop-content-page").not("." + value).hide(50);
            $(".dailyquotesdroptop-content-page").filter("." + value).show(50);
        }
    });
    // add active class to buttons

    $(".dailyquotesdroptop-filter").click(function () {
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







