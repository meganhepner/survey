$(document).ready(function() {
    $("form#name").submit(function(event) {
        event.preventDefault();
        const name = $("input#name").val();

    $(".name").text(name);
    });
});