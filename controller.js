$(document).ready(function(){
    $('#fusionCarousel').carousel(
        {
            interval: 35000
        }
    );
    $('#fusionCarousel768').carousel(
        {
            interval: 35000
        }
    );
    $("#card").flip({
        axis: 'y',
        trigger: 'manual'
    });

    $( "#arrowRight" ).click(function() {
        $("#card").flip(true);
        $("#clockFaceToShow").css("display","block");
    });

    $( "#arrowLeft" ).click(function() {
        $("#card").flip(false);
        $("#clockFaceToShow").css("display","none");
    });
    $(".hamburgerMenuIcon").click(function() {
        var checkHamburgerStatus = $(".dropdown-content").css("display");
        if (checkHamburgerStatus == "block") {
            $(".dropdown-content").css("display", "none");
        } else {
            $(".dropdown-content").css("display", "block");
        }
    });
});