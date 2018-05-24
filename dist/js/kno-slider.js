jQuery(function($) {

    $.ResponsiveSlider = function() {
        var container = $('.slider-container');

        var slidsIndex = container.find(".slids .item#active").index();
        var slids = container.find(".slids .item").length;

        var newbn = slidsIndex + 1;

        if(slidsIndex == (slids-1) || slidsIndex == -1) {

            newbn = 0;

            var nextImg = container.find(".slids .item").eq(newbn+1).find("img").attr("src");
            var prevImg = container.find(".slids .item").eq(slids-1).find("img").attr("src");

            container.find(".navigation .next .img").css("background-image", "url(" + nextImg + ")");
            container.find(".navigation .prev .img").css("background-image", "url(" + prevImg + ")");

            var prevItem = container.find(".slids .item#active");
            var nextItem = container.find(".slids .item").eq(newbn);
            prevItem.find(".head1").stop(true, true).animate({marginLeft: "-100%"}, 2000);
            prevItem.find(".head2").stop(true, true).animate({marginRight: "-100%"}, 2000);

            prevItem.stop(true, true).fadeOut({duration:500, queue:false}).removeAttr("id");
            nextItem.attr("id","active").fadeIn(500, function() {
                var imgheight = nextItem.find("img").height();
                container.find(".slids").animate({height: imgheight}, 100);

                setTimeout(
                    function() {
                        nextItem.find(".head1").stop(true, true).animate({marginLeft: "0%"}, 2000);
                    },
                    200);
                setTimeout(
                    function() {
                        nextItem.find(".head2").stop(true, true).animate({marginRight: "0%"}, 2000);
                    },
                    500);
            });

        }
        else {

            var nextImg = container.find(".slids .item").eq(newbn+1).find("img").attr("src");
            var prevImg = container.find(".slids .item").eq(newbn-1).find("img").attr("src");

            container.find(".navigation .next .img").css("background-image", "url(" + nextImg + ")");
            container.find(".navigation .prev .img").css("background-image", "url(" + prevImg + ")");

            var prevItem = container.find(".slids .item#active");
            var nextItem = container.find(".slids .item").eq(newbn);
            prevItem.find(".head1").stop(true, true).animate({marginLeft: "-100%"}, 2000);
            prevItem.find(".head2").stop(true, true).animate({marginRight: "-100%"}, 2000, function() {

                prevItem.stop(true, true).fadeOut({duration:500, queue:false}).removeAttr("id");
                nextItem.attr("id","active").fadeIn(500, function() {
                    var imgheight = nextItem.find("img").height();
                    container.find(".slids").animate({height: imgheight}, 100);

                    setTimeout(
                        function() {
                            nextItem.find(".head1").stop(true, true).animate({marginLeft: "0%"}, 2000);
                        },
                        200);
                    setTimeout(
                        function() {
                            nextItem.find(".head2").stop(true, true).animate({marginRight: "0%"}, 2000);
                        },
                        500);
                });

            });

        }

    }

    $.ResponsiveSlider();

    ResponsiveSliderInterval = setInterval(($.ResponsiveSlider), 10000);

    $(".slider-container .slids .item").hover(function(){
        clearInterval(ResponsiveSliderInterval);
    },function(){
        ResponsiveSliderInterval = setInterval(($.ResponsiveSlider), 10000);
    });

    $(".slider-container").on("swipeleft", function () {
        $(".slider-container .navigation .next").trigger("click");
    });

    $(".slider-container").on("swiperight", function () {
        $(".slider-container .navigation .prev").trigger("click");
    });

    $(".slider-container .navigation .next").on("click", function(){

        clearInterval(ResponsiveSliderInterval);

        var container = $('.slider-container');

        var slidsIndex = container.find(".slids .item#active").index();
        var slids = container.find(".slids .item").length;

        var newbn = slidsIndex + 1;
        var nextImagebn = newbn+1;

        if(slidsIndex == (slids-1)) {
            var newbn = 0;
            var nextImagebn = newbn+1;
        }

        if(nextImagebn == slids) {
            var nextImagebn = 0;
        }

        var nextImg = container.find(".slids .item").eq(nextImagebn).find("img").attr("src");
        var prevImg = container.find(".slids .item").eq(newbn-1).find("img").attr("src");

        container.find(".navigation .next .img").css("background-image", "url(" + nextImg + ")");
        container.find(".navigation .prev .img").css("background-image", "url(" + prevImg + ")");

        var prevItem = container.find(".slids .item#active");
        var nextItem = container.find(".slids .item").eq(newbn);
        prevItem.find(".head1").stop(true, true).animate({marginLeft: "-100%"}, 2000);
        prevItem.find(".head2").stop(true, true).animate({marginRight: "-100%"}, 2000, function() {

            prevItem.stop(true, true).fadeOut({duration:500, queue:false}).removeAttr("id");
            nextItem.attr("id","active").fadeIn(500, function() {
                var imgheight = nextItem.find("img").height();
                container.find(".slids").animate({height: imgheight}, 100);

                setTimeout(
                    function() {
                        nextItem.find(".head1").stop(true, true).animate({marginLeft: "0%"}, 2000);
                    },
                    200);
                setTimeout(
                    function() {
                        nextItem.find(".head2").stop(true, true).animate({marginRight: "0%"}, 2000);
                    },
                    500);
            });

        });

        ResponsiveSliderInterval = setInterval(($.ResponsiveSlider), 10000);

    });

    $(".slider-container .navigation .prev").click(function(){

        clearInterval(ResponsiveSliderInterval);

        var container = $('.slider-container');

        var slidsIndex = container.find(".slids .item#active").index();
        var slids = container.find(".slids .item").length;

        var newbn = slidsIndex - 1;
        var prevImagebn = newbn-1;

        if(slidsIndex == 0) {
            var newbn = slidsIndex - 1;
            var prevImagebn = newbn-1;
        }

        var nextImg = container.find(".slids .item").eq(newbn+1).find("img").attr("src");
        var prevImg = container.find(".slids .item").eq(prevImagebn).find("img").attr("src");

        container.find(".navigation .next .img").css("background-image", "url(" + nextImg + ")");
        container.find(".navigation .prev .img").css("background-image", "url(" + prevImg + ")");

        var prevItem = container.find(".slids .item#active");
        var nextItem = container.find(".slids .item").eq(newbn);
        prevItem.find(".head1").stop(true, true).animate({marginLeft: "-100%"}, 2000);
        prevItem.find(".head2").stop(true, true).animate({marginRight: "-100%"}, 2000);

        prevItem.stop(true, true).fadeOut({duration:500, queue:false}).removeAttr("id");
        nextItem.attr("id","active").fadeIn(500, function() {
            var imgheight = nextItem.find("img").height();
            container.find(".slids").animate({height: imgheight}, 100);

            setTimeout(
                function() {
                    nextItem.find(".head1").stop(true, true).animate({marginLeft: "0%"}, 2000);
                },
                200);
            setTimeout(
                function() {
                    nextItem.find(".head2").stop(true, true).animate({marginRight: "0%"}, 2000);
                },
                500);
        });

        ResponsiveSliderInterval = setInterval(($.ResponsiveSlider), 10000);

    });

    $( window ).resize(function() {
        var container = $('.slider-container');
        var imgheight = container.find(".slids .item#active").find("img").height();
        container.find(".slids").animate({height: imgheight}, 100);
    });

});