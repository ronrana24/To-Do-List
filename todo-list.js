// to add silde effect on the input
$("#add").on("click", function() {
    $("input").fadeToggle();
});

//to toggle the line-through on todo item
$("ul").on("click", "li", function() {
    $(this).toggleClass("line");
});

// to delete the todo item
$("ul").on("click", ".delete", function(event) {
    $(this).parent().fadeOut(1000, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

//to take the value of input and appned it on the list
$("input").keypress(function(event) {
    if(event.which === 13) {
        var value = $(this).val();
        $("ul").append("<li><span class=delete>X</span><span class=text> " + value + "</span></li>");
        $(this).val("");
    }
});
