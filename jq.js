// Add a class to all <h1> elements using jQuery
$(document).ready(function () {
    $("h1").addClass("heading-style");

    // Get a heading content using .html() method & #headingOne id
    let headingContent = $("#headingOne").html();
    // console.log(headingContent);

    // Also can use .text() method to get the content
    let headingContent2 = $("#headingOne").text();
    // console.log(headingContent2);

    // .val(), .attr(), .css() methods
    let inputVal = $("#inputFieldOne").val();
    // console.log(inputVal);

    // We can set also attr type value using this code. First parameter is attribute name and second is value
    let inputAttr = $("#inputFieldOne").attr("type", "email");
    // console.log(inputAttr);

    // get css property value of headingOne
    let cssValue = $("#headingOne").css("color");
    // console.log(cssValue);
});


