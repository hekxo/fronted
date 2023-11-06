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

$(document).ready(function () {
    $("#myForm").hide();
    $("#my-password-form").hide();
    $("#btn-email").click(function () {
        $("#myForm").show();
        $("#my-password-form").show();
    })
});

const taskList = {
    isOpen: true,
    listElement: document.getElementById("myOL"),
    toggleList: function() {
        this.isOpen = !this.isOpen;
        this.listElement.style.display = this.isOpen ? "block" : "none";
    }
};

$(document).ready(function() {
    $("#closingTasksList").click(function () {
        taskList.toggleList();
    });
});

const formVisibility = {
    emailFormElement: $("#myForm"),
    passwordFormElement: $("#my-password-form"),
    toggleForms: function() {
        this.emailFormElement.toggle();
        this.passwordFormElement.toggle();
    }
};

$(document).ready(function() {
    formVisibility.emailFormElement.hide();
    formVisibility.passwordFormElement.hide();

    $("#btn-email").click(function () {
        formVisibility.toggleForms();
    });
});






