$(document).ready(function () {
    $(".box").on("click", function () {
        var classNames = $(this).attr("class").split(" ");
        var boxClass = classNames[0];
        var className = classNames[1]; // Use className, not classNames

        if ($(this).css("background-color") === "rgb(255, 0, 0)") { // Remove the space
            $("." + className).css("background-color", "#000"); // Use className, not className[1]
        } else {
            $("." + boxClass).css("background-color", "#000");
            $("." + className).css("background-color", "red");
        }
    });
});