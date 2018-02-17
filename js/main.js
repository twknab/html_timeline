$(document).ready(function() {

  //*********************************************//
  //******** MILESTONE IMAGE FADE EFFECT ********//
  //*********************************************//

  $('.milestone-image').hover(function() {

    $(this).animate({
      opacity: 0.5,
    }, 500, function() {
      // Animation complete.
    })

  }, function() {
    $(this).animate({
      opacity: 1,
    }, 500)

  });


  //***********************************//
  //******** SUB EVENT ACTIONS ********//
  //***********************************//
  // Create 5 Sub-Event Dialogs:
  let i = 1;
  while (i <= 5) {
    // Sub-Event 1 Dialog:
    $(`.sub-event-dialog${i}`).dialog({
      autoOpen: false,
      height: 350,
      width: 500,
      show: {
        effect: "fade",
        duration: 400
      },
      hide: {
        effect: "drop",
        duration: 800
      },
      buttons: [
        {
          text: "Close",
          color: "white",
          click: function() {
            $( this ).dialog( "close" );
          },
        }
      ],
    });

    i++;
  };

  // Click event for Sub-Event 1:
  $(".sub-event1").on("click", function() {
    $(".sub-event-dialog1").dialog("open");
  });
  // Click event for Sub-Event 2:
  $(".sub-event2").on("click", function() {
    $(".sub-event-dialog2").dialog("open");
  });
  // Click event for Sub-Event 3:
  $(".sub-event3").on("click", function() {
    $(".sub-event-dialog3").dialog("open");
  });
  // Click event for Sub-Event 4:
  $(".sub-event4").on("click", function() {
    $(".sub-event-dialog4").dialog("open");
  });
  // Click event for Sub-Event 5:
  $(".sub-event5").on("click", function() {
    $(".sub-event-dialog5").dialog("open");
  });


  //***************************//
  //******** TOOL TIPS ********//
  //***************************//

  // Turn on tooltips:
  $( document ).tooltip();
  // Set tool tip position for sub-event1:
  $( ".sub-event1" ).tooltip({
    position: { my: "left+15 center", at: "right center" },
    show: { effect: "blind", duration: 300 }
  });
  // Set tool tip position for sub-event2:
  $( ".sub-event2" ).tooltip({
    position: { my: "left+15 center", at: "right center" },
    show: { effect: "blind", duration: 300 }
  });
  // Set tool tip position for sub-event3:
  $( ".sub-event3" ).tooltip({
    position: { my: "right-15 bottom", at: "top center" },
    show: { effect: "blind", duration: 300 }
  });
  // Set tool tip position for sub-event4:
  $( ".sub-event4" ).tooltip({
    position: { my: "left+15 bottom", at: "top center" },
    show: { effect: "blind", duration: 300 }
  });
  // Set tool tip position for sub-event5:
  $( ".sub-event5" ).tooltip({
    position: { my: "left+15 center", at: "right center" },
    show: { effect: "blind", duration: 300 }
  });
  // Hide tooltips for dialogs:
  $( "[title|='Close']" ).tooltip({
    disabled: true,
  });


}); // end doc ready
