$(document).ready(function () {
    // Images Section
    $('.Images-carousel-one').owlCarousel({
        margin:10,
        loop:true,
        autoWidth:true,
        items:4,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 3500,
        autoplaySpeed: 2500,
        autoplayHoverPause: true,
    });
    $('.Images-carousel-two').owlCarousel({
        margin:10,
        loop:true,
        autoWidth:true,
        items:4,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 3500,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
    });

    //--------------------------------------------

    // Our Services Section
    $('.services-carousel').owlCarousel({
        margin: 10,
        loop: false,
        items:1
    });
    $(".services-buttons .services-button").click(function (e) {
        e.preventDefault();
        var idx = $(this).data("idx");
        $(".services-carousel").trigger("to.owl.carousel", idx);
    });
    $(".services-buttons .services-button").click(function (e) {
        e.preventDefault();
        if ($(this).attr("id")=="one") {
            $('#design-card').show();
            $('#construction-card').hide();
            $('#interior-card').hide();
            $('#exterior-card').hide();
            $('#furniture-card').hide();
        }
        else if ($(this).attr("id")=="two") {
            $('#design-card').hide();
            $('#construction-card').show();
            $('#interior-card').hide();
            $('#exterior-card').hide();
            $('#furniture-card').hide();
        }
        else if ($(this).attr("id")=="three") {
            $('#design-card').hide();
            $('#construction-card').hide();
            $('#interior-card').show();
            $('#exterior-card').hide();
            $('#furniture-card').hide();
        }
        else if ($(this).attr("id")=="four") {
            $('#design-card').hide();
            $('#construction-card').hide();
            $('#interior-card').hide();
            $('#exterior-card').show();
            $('#furniture-card').hide();
        }
        else {
            $('#design-card').hide();
            $('#construction-card').hide();
            $('#interior-card').hide();
            $('#exterior-card').hide();
            $('#furniture-card').show();
        }
    });

    //--------------------------------------------

    // Our Workflow Section
    $('.workflow-carousel').owlCarousel({
        margin: 10,
        loop: false,
        items:1
    });
    $(".workflow-step").click(function (e) {
        e.preventDefault();
        var idx = $(this).data("idx");
        $(".workflow-carousel").trigger("to.owl.carousel", idx);
    });
    $(".workflow-step").click(function (e) {
        e.preventDefault();
        // if ($(this).attr("id")=="one1") {
        //     ($(this).find('.ico').addClass('ico-green'));
        //     ($(this).find('.desc').addClass('show'));
        // }
        if ($(this).attr("id")=="two2") {
            ($(this).find('.ico').addClass('ico-green'));
            ($(this).find('.desc').addClass('show'));
        }
        else if ($(this).attr("id")=="three3") {
            ($(this).find('.ico').addClass('ico-green'));
            ($(this).find('.desc').addClass('show'));
        }
        else if ($(this).attr("id")=="four4") {
            ($(this).find('.ico').addClass('ico-green'));
            ($(this).find('.desc').addClass('show'));
        }
    });

    //--------------------------------------------

    // Our Latest Projects Section
    $(".project-wrapper").mouseover(function (e) {
        e.preventDefault();
        ($(this).find('.more').toggleClass('project-more'));
    });
    $(".project-wrapper").mouseout(function (e) {
        $(".project-wrapper .more").removeClass('project-more');
    });

    //--------------------------------------------

    // About Section
    $('.about-carousel').owlCarousel({
        margin: 10,
        loop: false,
        items:1
    });
    $(".about-buttons .about-button").click(function (e) {
        e.preventDefault();
        var idx = $(this).data("idx");
        $(".about-carousel").trigger("to.owl.carousel", idx);
    });
    $(".about-buttons .about-button").click(function (e) {
        e.preventDefault();
        if ($(this).attr("id")=="one1") {
            $('#design-card1').show();
            $('#construction-card2').hide();
            $('#interior-card3').hide();
            $('#exterior-card4').hide();
            $('#furniture-card5').hide();
        }
        else if ($(this).attr("id")=="two2") {
            $('#design-card1').hide();
            $('#construction-card2').show();
            $('#interior-card3').hide();
            $('#exterior-card4').hide();
            $('#furniture-card5').hide();
        }
        else if ($(this).attr("id")=="three3") {
            $('#design-card1').hide();
            $('#construction-card2').hide();
            $('#interior-card3').show();
            $('#exterior-card4').hide();
            $('#furniture-card5').hide();
        }
        else if ($(this).attr("id")=="four4") {
            $('#design-card1').hide();
            $('#construction-card2').hide();
            $('#interior-card3').hide();
            $('#exterior-card4').show();
            $('#furniture-card5').hide();
        }
        else {
            $('#design-card1').hide();
            $('#construction-card2').hide();
            $('#interior-card3').hide();
            $('#exterior-card4').hide();
            $('#furniture-card5').show();
        }
    });
});