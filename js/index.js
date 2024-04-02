$(document).ready(function(){
// home page//
     // Typewriter effect for h1.tag-line//
     $('.tag-line').each(function() {
        var items = $(this).attr('title') + ';' + $(this).text();
        var textArray = $.map(items.split(';'), $.trim);
        var filteredTextArray = textArray.filter(function(item) {
            return item !== ''; // Filter out empty strings
        });
        
        $(this).empty().attr('title', '').teletype({
            text: filteredTextArray,
            typeDelay: 10,
            backDelay: 20,
            blinkSpeed: 1000,
            cursor: '▏',
            delay: 3000,
            preserve: false,
            loop: 0,
            humanise: true,
            smoothBlink: true,
            callbackNext: null,
            callbackType: null,
            callbackFinished: null
        });
    });

    // photo links fade in & out with mouse over//
    $("#academic-photo").mouseenter(function(){
        $("#academic-photo").fadeTo("fast", 0.5);
    });
    $("#academic-photo").mouseleave(function(){
        $("#academic-photo").fadeTo("fast", 1.0);
    });

    // puff effect when "get started" is clicked
    $(".button-text").click(function(){
        $("header").effect("puff", {percent: 150}, 500);
    });

    // hover enlarge photo class//
    $('.photo img').hover(
        function() {
            $(this).css('transform', 'scale(1.2)');
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );

// lounge page//
    // Typewriter effect//
    $('.the-lounge').each(function() {
        var items = $(this).attr('title') + ';' + $(this).text();
        var textArray = $.map(items.split(';'), $.trim);
        var filteredTextArray = textArray.filter(function(item) {
            return item !== ''; // Filter out empty strings
        });
        
        $(this).empty().attr('title', '').teletype({
            text: filteredTextArray,
            typeDelay: 10,
            backDelay: 20,
            blinkSpeed: 1000,
            cursor: '▏',
            delay: 3000,
            preserve: false,
            loop: 0,
            humanise: true,
            smoothBlink: true,
            callbackNext: null,
            callbackType: null,
            callbackFinished: null
        });
    });
    
    
    
    $('.coffee').mouseenter(function(e){
        var textCoffee = $("#coffee").text();
        $("#coffee").empty();
        var iCoffee = 0;
        var speedCoffee  = 125;

        function typeWriterCoffee () {
            if (iCoffee  < textCoffee .length) {
                $("#coffee ").append(textCoffee .charAt(iCoffee ));
                iCoffee ++;
                setTimeout(typeWriterCoffee , speedCoffee );
            }
        }
        typeWriterCoffee();
    });
   
    $('.laugh').mouseenter(function(e){
        var textLaugh = $("#laugh").text();
        $("#laugh").empty();
        var iLaugh = 0;
        var speedLaugh  = 125;

        function typeWriterLaugh () {
            if (iLaugh  < textLaugh .length) {
                $("#laugh ").append(textLaugh .charAt(iLaugh ));
                iLaugh ++;
                setTimeout(typeWriterLaugh , speedLaugh );
            }
        }
        typeWriterLaugh();
    });

    $('.stress').mouseenter(function(e){
        var textStress = $("#stress").text();
        $("#stress").empty();
        var iStress = 0;
        var speedStress  = 125;

        function typeWriterStress () {
            if (iStress  < textStress .length) {
                $("#stress ").append(textStress .charAt(iStress ));
                iStress ++;
                setTimeout(typeWriterStress , speedStress );
            }
        }
        typeWriterStress();
    });

    
    // I want to... select menu//
    $(function() {
        $("#actions").selectmenu();
    });

    $("#action-menu").change(function(){
        var selectedLink = $(this).find("option:selected").data("link");
        if (selectedLink) {
            window.location.href = selectedLink;
        }
    });
    // hover enlarge//
    // humor//
    $('.scroll-container img').hover(
        function() {
            $(this).find('img').css('transform', 'scale(1.2)');
        },
        function() {
            $(this).find('img').css('transform', 'scale(1)');
        }
    );
    // coffee & stress
    $('.column img').hover(
        function() {
            $(this).css('transform', 'scale(1.2)');
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );

// academics page//
    // I'm looking for... filter menu//

     // Typewriter effect for h1.academics//
    $('.academics').each(function() {
        var items = $(this).attr('title') + ';' + $(this).text();
        var textArray = $.map(items.split(';'), $.trim);
        var filteredTextArray = textArray.filter(function(item) {
            return item !== ''; // Filter out empty strings
        });
        
        $(this).empty().attr('title', '').teletype({
            text: filteredTextArray,
            typeDelay: 10,
            backDelay: 20,
            blinkSpeed: 1000,
            cursor: '▏',
            delay: 3000,
            preserve: false,
            loop: 0,
            humanise: true,
            smoothBlink: true,
            callbackNext: null,
            callbackType: null,
            callbackFinished: null
        });
    });
   
//about//
    // Typewriter effect for h1.about-section//
    var textAbout = $(".about-section").text();
    $(".about-section").empty();
    var iAbout = 0;
    var speedAbout = 125;

    function typeWriterAbout() {
        if (iAbout < textAbout.length) {
            $(".about-section").append(textAbout.charAt(iAbout));
            iAbout++;
            setTimeout(typeWriterAbout, speedAbout);
        }
    }
    typeWriterAbout();
//contact//
    // Typewriter effect for h1.contact-heading//
    var textContact = $(".contact-heading").text();
    $(".contact-heading").empty();
    var iContact = 0;
    var speedContact = 125;

    function typeWriterContact() {
        if (iContact < textContact.length) {
            $(".contact-heading").append(textContact.charAt(iContact));
            iContact++;
            setTimeout(typeWriterContact, speedContact);
        }
    }
    typeWriterAbout();
});