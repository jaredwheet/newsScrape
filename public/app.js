// When you click the savenote button
$("#save-notes").on("click", function() {  
  // Grab the id associated with the article from the submit button
  var thisId = $(this).attr("data-id");
  console.log(thisId)
  
  // Run a POST request to change the note, using what's entered in the inputs
  $.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
      // Value taken from title input
      title: $("#noteTitle").val(),
      // Value taken from note textarea
      body: $("#notesText").val()
    }
  })
  // With that done
  .then(function(data) {
    // Log the response
    
    // Empty the notes section
    $("#notes").empty();
  });
  
  // Also, remove the values entered in the input and textarea for note entry
  $("#titleinput").val("");
  $("#bodyinput").val("");
});

$(".view-notes").on("click", function(){
  var thisId = $(this).attr("data-id");
  window.location = "/articles-notes/" + thisId 
  console.log("here")
})

