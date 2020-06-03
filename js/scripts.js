$(document).ready(function() {
    $("form#name").submit(function(event) {
        event.preventDefault();
        const name = $("input#name").val();
        const flavor = $("input:radio[name=flavor]:checked").val();
        $(".food").text(flavor);
        $(".name").text(name);
    });

    // $("form#name").submit(function(event) {
    //     event.preventDefault();

    // });
});