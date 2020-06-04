$(document).ready(function() {
    $("form#name").submit(function(event) {
        event.preventDefault();
        const name = $("input#name").val();
        const flavor = $("input:radio[name=flavor]:checked").val();
        const music = $("#music").val();
        const dob = $("#born").val();
        
        $(".food").text(flavor);
        $(".name").text(name);
        $(".muzak").text(music);
        $(".birthdate").text(dob);
    });
});