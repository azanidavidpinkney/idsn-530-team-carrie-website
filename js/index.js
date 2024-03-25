$(document).ready(function(){
//home page//
    //photo links fade in & out with mouse over//
    $("#academic-photo").mouseenter(function(){
        $("#academic-photo").fadeTo("fast", 0.5);
    });
    $("#academic-photo").mouseleave(function(){
        $("#academic-photo").fadeTo("fast", 1.0);
    });

    $("#lounge-photo").mouseenter(function(){
        $("#lounge-photo").fadeTo("fast", 0.5);
    });
    $("#lounge-photo").mouseleave(function(){
        $("#lounge-photo").fadeTo("fast", 1.0);
    });

    $("#humor-photo").mouseenter(function(){
        $("#humor-photo").fadeTo("fast", 0.5);
    });
    $("#humor-photo").mouseleave(function(){
        $("#humor-photo").fadeTo("fast", 1.0);
    });

    $("#coffee-photo").mouseenter(function(){
        $("#coffee-photo").fadeTo("fast", 0.5);
    });
    $("#coffee-photo").mouseleave(function(){
        $("#coffee-photo").fadeTo("fast", 1.0);
    });

    $("#stressmgmt-photo").mouseenter(function(){
        $("#stressmgmt-photo").fadeTo("fast", 0.5);
    });
    $("#stressmgmt-photo").mouseleave(function(){
        $("#stressmgmt-photo").fadeTo("fast", 1.0);
    });

    //puff effect when "get started" is clicked//
    $(".button-text").click(function(){
        $("header").effect("puff", {percent: 150}, 500);
    });

//lounge page//
    // I want to... select menu//
    $( function() {
        $( "#actions" ).selectmenu();
    } );

    $("#action-menu").change(function(){
    var selectedLink = $(this).find("option:selected").data("link");
    if (selectedLink) {
        window.location.href = selectedLink;
    }
    });

    ////

//academics page//
    // I'm looking for... filter menu//
    



});