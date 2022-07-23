$(document).ready(function() {
    $("#projects-tab").load("websites.html");
    $("#web").click(function() {
        $("#projects-tab").load("websites.html");
        // $("#projects-tab .col-md-4").addClass("reveal active");
    });
    $(".design").on("click", function() {
        $("#projects-tab").load("designs.html");
    });
    $(".digi-art").on("click", function() {
        $("#projects-tab").load("digi_art.html");
    });

    $(".right-area").addClass("reveal");
    $(".reveal").addClass("active");
    $(".left-area").addClass("reveal");
    $(".reveal").addClass("active");
    $("#scrollTop").css("visibility", "hidden");

    $("#scrollTop").on("click", function() {
        document.documentElement.scrollTop = 0;
    });

    // $(".navbar-nav li").click(function() {
    //     $(".navbar-nav li.active").removeClass("active");
    //     $(this).addClass("active");
    // });

    $("#projects .list-group-item").click(function() {
        $("#projects .list-group-item.active").removeClass("active");
        $(this).addClass("active");
    });

    $(".navbar .navbar-nav li:first").trigger("click");

    $(".navbar .navbar-nav li").click(function() {
        window.location = $(this).find("a").first().attr("href");
        return false;
    });

    var typed = new Typed(".typing", {
        strings: ["Developer", "Digital Artist", "Web Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    var typed = new Typed(".typing2", {
        strings: ["Developer", "Digital Artist", "Web Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
});

el_autohide = document.querySelector(".autohide");

// add padding-top to bady (if necessary)
// navbar_height = document.querySelector(".navbar").offsetHeight;
// document.body.style.paddingTop = navbar_height + "px";

if (el_autohide) {
    var last_scroll_top = 0;
    window.addEventListener("scroll", function() {
        let scroll_top = window.scrollY;
        if (scroll_top < last_scroll_top) {
            el_autohide.classList.remove("scrolled-down");
            el_autohide.classList.add("scrolled-up");
        } else {
            el_autohide.classList.remove("scrolled-up");
            el_autohide.classList.add("scrolled-down");
        }
        last_scroll_top = scroll_top;
    });
    // window.addEventListener
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
    var animate_progress = document.querySelector("#skills .row.technical");
    if (animate_progress.getBoundingClientRect().top < window.innerHeight - 150) {
        $(".progress-bar").css("width", function() {
            return $(this).attr("aria-valuenow") + "%";
        });
    } else {
        $(".progress-bar").css("width", 0);
    }

    $(".navbar").css("background-color", "rgba(30, 59, 77, 0.7)");
}
window.addEventListener("scroll", reveal);

const navLi = document.querySelectorAll(".navbar-nav li");
const sec = document.querySelectorAll("section");

function onScroll() {
    let current = "";
    sec.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }

        if (window.scrollY == 0) {
            $("#scrollTop").css("visibility", "hidden");
        } else {
            $("#scrollTop").css("visibility", "visible");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
    if (window.scrollY == 0) {
        $("#scrollTop").css("visibility", "hidden");
        $(".navbar").css("background", "transparent");
    } else {
        $(".navbar").css("background", "rgba(30, 59, 77, 0.7)");
    }
    // console.log(current);
}

window.addEventListener("scroll", onScroll);

function sendEmail() {
    var x = document.getElementById("email").value;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "sfrankenstein734@gmail.com",
        Password: "A3AE452BCCCA08A2789278E6A9E4F098BEA9",
        To: "jslpega@gmail.com",
        From: document.getElementById("email").value,
        Subject: x,
        Body: "<b>Name: </b>" +
            document.getElementById("name").value +
            "<br><b>Body: </b>:" +
            document.getElementById("message").value,
    }).then(() => alert("Email Sent"));
}