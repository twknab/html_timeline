$(document).ready(function() {

  //*******************************************//
  //******** VERTICAL TIMELINE CONTENT ********//
  //*******************************************//

  // Get timeline1 HTML and save it:
  let subEvents = $( "#timeline-line" ).html();

  // Copy this html into timeline 2:
  $( "#timeline-line-2" ).html(subEvents);

  // We are going to modify the classes making up various elements in our timeline-2.
  // To achive this, we will first grab all links and dialogs (divs) that we will need to modify classes for:
  events = $( "#timeline-line-2 > .sub-events > .sub-event > a" );
  dialogs = $( "#timeline-line-2 > .sub-events > .sub-event > .sub-event-dialog" );

  // Because the number of dialogs match the number of events, let's loop through each event and dialoge, pull out the class we don't need, and add in our class for vertical layouts:
  for (let i = 0; i < events.length; i++) {
    if (events.length !== dialogs.length) {
      console.log("There are more dialogues than events.");
    } else {
      let event = events[i],
        dialog = dialogs[i];
        $(event).removeClass(`sub-event${i + 1}`).addClass(`sub-event${i + 1}-vertical`);
        $(dialog).removeClass(`sub-event-dialog${i + 1}`).addClass(`sub-event-dialog${i + 1}-vertical`);
    }
  }
  

  //*********************************************//
  //******** MILESTONE IMAGE FADE EFFECT ********//
  //*********************************************//

  $('.milestone-image').hover(function() {

    $(this).animate({
      opacity: 0.5,
    }, 500, function() {
      // Animation complete.
    });

  }, function() {
    $(this).animate({
      opacity: 1,
    }, 500);

  });


  //***********************************//
  //******** SUB EVENT ACTIONS ********//
  //***********************************//
  // Create 5 Sub-Event Dialogs:
  let i = 1;
  let close = function () {
    $(this).dialog("close");
  };
  while (i <= 5) {
    $(`.sub-event-dialog${i}`).dialog({
      autoOpen: false,
      height: 'auto',
      width: 'auto',
      fluid: true,
      modal: true,
      open: function () {
        $('.ui-widget-overlay').addClass('custom-overlay');
      } ,
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
          click: close,
        }
      ],
    });
    $(`.sub-event-dialog${i}-vertical`).dialog({
      autoOpen: false,
      height: 'auto',
      width: 'auto',
      modal: true,
      fluid: true,
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
          click: close,
        }
      ],
    });

    i++;
  }

  //********************************//
  //****** HORIZONTAL DIALOGS ******//
  //********************************//

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
  //******************************//
  //****** VERTICAL DIALOGS ******//
  //******************************//
  $(".sub-event1-vertical").on("click", function() {
    $(".sub-event-dialog1").dialog("open");
  });
  // Click event for Sub-Event 2:
  $(".sub-event2-vertical").on("click", function() {
    $(".sub-event-dialog2").dialog("open");
  });
  // Click event for Sub-Event 3:
  $(".sub-event3-vertical").on("click", function() {
    $(".sub-event-dialog3").dialog("open");
  });
  // Click event for Sub-Event 4:
  $(".sub-event4-vertical").on("click", function() {
    $(".sub-event-dialog4").dialog("open");
  });
  // Click event for Sub-Event 5:
  $(".sub-event5-vertical").on("click", function() {
    $(".sub-event-dialog5").dialog("open");
  });


  //***************************//
  //******** TOOL TIPS ********//
  //***************************//

  // Turn on tooltips for horizontal layout only:
  // Set tool tip position for sub-event1:
  $( ".sub-event1" ).tooltip({
    position: { my: "left+15 center", at: "right center" },
    show: { effect: "blind", duration: 300 },
    track: true,
  });
  // Set tool tip position for sub-event2:
  $( ".sub-event2" ).tooltip({
    position: { my: "left+15 center", at: "right center" },
    show: { effect: "blind", duration: 300 },
    track: true,
  });
  // Set tool tip position for sub-event3:
  $( ".sub-event3" ).tooltip({
    position: { my: "right-15 bottom", at: "top center" },
    show: { effect: "blind", duration: 300 },
    track: true,
  });
  // Set tool tip position for sub-event4:
  $( ".sub-event4" ).tooltip({
    position: { my: "left+15 bottom", at: "top center" },
    show: { effect: "blind", duration: 300 },
    track: true,
  });
  // Set tool tip position for sub-event5:
  $( ".sub-event5" ).tooltip({
    position: { my: "left+15 center", at: "right center" },
    show: { effect: "blind", duration: 300 },
    track: true,
  });
  
  // Hide tooltips for dialogs:
  $( "[title|='Close']" ).tooltip({
    disabled: true,
  });

}); // end doc ready
