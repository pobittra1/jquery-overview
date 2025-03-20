// Add a class to all <h1> elements using jQuery
$(document).ready(function () {
    $("h1").addClass("heading-style");



    // get a heading content using .html() method & #headingOne id
    let headingContent = $("#headingOne").html();
    console.log(headingContent);

    //also can use .text() method to get the content
    let headingContent2 = $("#headingOne").text();
    console.log(headingContent2);
});



