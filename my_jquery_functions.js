$(document).ready(function() {
    $("#closingTasksList").click(function () {
        $("#myDIV, #myOL").toggle();
    })
})

$(document).ready(function () {
    $("#play-button").on({
        mouseenter: function () {
            $(this).css("background-color", "#BD3944");
        },
        mouseleave: function () {
            $(this).css("background-color", "black");
        }
    })
});


