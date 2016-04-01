$(function() {
  $("button").on("click", function() {
    var buttonId = $(this).parent().attr("id");
    $("#secondButtons").append("<div id=\"moreButtons\"><button id=\"changeButton\">CHANGE</button>" + "<button id=\"deleteButton\">DELETE</button></div>")



    $("#changeButton").on("click", function() {
      $('body').toggleClass('.color').css({
        'background-color': 'red'
      })
    });

    $("#deleteButton").on("click", function() {
      //if (buttonId == "deleteButton") {
        $('#moreButtons').remove();
      //};
    });

})
});
