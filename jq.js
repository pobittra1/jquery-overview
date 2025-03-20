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


});


