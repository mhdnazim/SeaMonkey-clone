// to go top of the screen 
function topFunction() {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}

// for scrollup navbar 
$(document).ready(function () {
    const mybutton = document.getElementById("myBtn")
    mybutton.style.display = "none"

    var prevScrollpos = window.scrollY
    window.onscroll = function () {

        var currentScrollpos = window.scrollY

        if (prevScrollpos > currentScrollpos) {
            document.getElementById("navbar").style.top = "0"
            // document.getElementById("navbar").style.background = "#000000"
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block"
            } else {
                mybutton.style.display = "none"
            }

        } else {
            document.getElementById("navbar").style.top = "-100%"
            document.getElementById("navbar").style.background = "#00000077"
            document.getElementById("navbar").style.backdropFilter = 'blur(8px)'
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block"
            } else {
                mybutton.style.display = "none"
            }
        }

        prevScrollpos = currentScrollpos

    }
})


// to remove background color of navbar 
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() == 0) {
            //Do whatever you want to do
            document.getElementById("navbar").style.background = "#00000000"
            document.getElementById("navbar").style.backdropFilter = 'none'
        }
    })


    // to add an img tag inside a div

    $(window).resize(function () {
        if ($(window).width() < 991) {
            $("#empty").html("<img src='./images/explore_bg.png' width='100%'>")

        } else {
            $("#empty").html("<div></div>")

        }
    })
})

// owl carousal of expedition tab 
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: false,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            360: {
                items: 3
            },
            700: {
                items: 7
            }
        }
    })
})

// for fade in animation of gallery section 
$(document).ready(function () {
    $(document).on("scroll", function () {
        var pageTop = $(document).scrollTop()
        var pageBottom = pageTop + $(window).height()
        var tags = $(".tag")

        for (var i = 0; i < tags.length; i++) {
            var tag = tags[i]

            if ($(tag).position().top < pageBottom) {
                $(tag).addClass("visible")
            } else {
                $(tag).removeClass("visible")
            }
        }
    })

})





