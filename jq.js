// Add a class to all <h1> elements using jQuery
$(document).ready(function () {
    $("h1").addClass("heading-style");

    // Get a heading content using .html() method & #headingOne id
    let headingContent = $("#headingOne").html();
    // console.log(headingContent);

    // Also can use .text() method to get the content
    let headingContent2 = $("#headingOne").text();
    // console.log(headingContent2);





    // --------------.val(), .attr(), .css() methods----------------

    // get value of input field using .val() method
    let inputVal = $("#inputFieldOne").val();
    // console.log(inputVal);

    // We can set also attr type value using this code. First parameter is attribute name and second is value
    let inputAttr = $("#inputFieldOne").attr("type", "email");
    // console.log(inputAttr);

    // get css property value of headingOne
    let cssValue = $("#headingOne").css("color");
    // console.log(cssValue);
    //set css property value of headingOne that is cursor pointer
    let setCssProperty = $("#headingOne").css("cursor", "pointer");








    // -------------addClass(), removeClass(), toggleClass() methods-----------------

    //add class that name is heading-style2 to headingOne
    $("#headingOne").addClass("heading-style2");


    //remove class that name is heading-style2 from headingOne
    $("#headingOne").removeClass("heading-style2");

    //toggle class that name is heading-style2 from headingOne 
    //its actually work based on click event or like any event.
    // $("#headingOne").toggleClass("heading-style2");
    //example of toggleClass() method using click event
    $("#headingOne").click(function () {
        $(this).toggleClass("heading-style2");
    });





    //about event handling that is click, dblclick, mouseenter, mouseleave, mouseover, mouseout, mousemove, keydown, keyup, keypress, focus, blur, change, submit, resize, scroll, load, unload etc.--------------------------


    //mouseover event example
    //add class property for #forEventPractise when mouse over on it
    $("#forEventPractise").mouseover(function () {
        $(this).css("cursor", "pointer");
    }
    );


    //click event example
    //add class for #headingOne when click on it
    $("#forEventPractise").click(function () {
        $(this).toggleClass("fontSizeIncOrDec");
    });


    //dblclick event example
    //get the css all property and value of .fontSizeIncOrDec class when double click on it also print it in console
    $("#fordbClick").dblclick(function () {
        $(this).css("fontSize", "100px")
    });


    //have more events. all event structure are same. so i can't repeat it again





    //--------------------------document traversal methods--------------------------
    // .parent(), parents(), .siblings(), .child(), .next(), .prev(), .find(), .children()

    // Example of .parent() method
    let parentElement = $("#headingOne").parent();
    console.log("Parent Element of headingOne is:  ", parentElement);

    // Example of .parents() method
    let allParents = $("#headingOne").parents();
    console.log("All Parent Elements of headingOne is:", allParents);

    // Example of .siblings() method
    let siblingElements = $("#headingOne").siblings();
    console.log("Sibling Elements of headingOne is:", siblingElements);

    // Example of .children() method
    let childElements = $("#headingOne").children();
    console.log("Child Elements of headingOne is:", childElements);

    // Example of .next() method
    let nextElement = $("#headingOne").next();
    console.log("Next Element of headingOne is:", nextElement);

    // Example of .prev() method
    let previousElement = $("#headingOne").prev();
    console.log("Previous Element of headingOne is:", previousElement);

    // Example of .find() method
    let foundElements = $("#headingOne").find(".childClass");
    console.log("Found Elements of headingOne is:", foundElements);






    // ---------------------Animation effect methods------------------
    // .hide(), .show(), .toggle(), .fadeIn(), fadeOut(), .fadeToggle(), .slideUp(), .slideDown(), .slideToggle(), .animate().


    // Example of .hide() method
    $(".hideButton").click(function () {
        $(".hideButton").hide();
    });



    // Example of .show() method
    $(".forShowButton").click(function () {
        $("#animShowButton").show();
    });



    // Example of .toggle() method
    $("#hideOrShow").click(function () {
        $("#animShowButton").toggle();
    });



    // Example of .fadeIn() method
    $("#fadeIn").click(function () {
        $("#animShowButton").fadeIn();
    });


    // Example of .fadeOut() method
    $("#fadeOut").click(function () {
        $("#animShowButton").fadeOut();
    });



    // Example of .fadeToggle() method
    $("#fadeToggle").click(function () {
        $("#animShowButton").fadeToggle();
    });



    // Example of .slideUp() method
    $("#slideUp").click(function () {
        $("#animShowButton").slideUp(500);
    });



    // Example of .slideDown() method
    $("#slideDown").click(function () {
        $("#animShowButton").slideDown(500);
    });



    // Example of .slideToggle() method
    $("#slideToggle").click(function () {
        $("#animShowButton").slideToggle(500);
    });



    // Example of .animate() method
    $("#animate").click(function () {
        $("#animShowButton").animate({
            fontSize: "50px",
            opacity: 0.5,
            marginLeft: "50px"
        }, 1000);
    });




});



