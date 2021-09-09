$(document).ready(function() {

    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');

    });

    $(window).document('scroll load', function() {

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

    });

    /////////Smooth scrolling>

    $('a[href*="#"]').document('click', function(g) {

        g.preventDefault();

        $('html, body').animate({

                scrollTop: $($(this).attr('href')).offset().top,
            },
            500,
            'linear'

        );

    });

});