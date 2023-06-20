
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    timeZone: 'UTC',
    headerToolbar: {
      left: 'today prev,next',
      center: 'title',
      right: 'resourceTimelineDay,resourceTimelineTenDay,resourceTimelineMonth,resourceTimelineYear'
    },
    initialView: 'resourceTimelineDay',
    scrollTime: '08:00',
    aspectRatio: 1.5,
    views: {
      resourceTimelineDay: {
        buttonText: ':15 slots',
        slotDuration: '00:15'
      },
      resourceTimelineTenDay: {
        type: 'resourceTimeline',
        duration: { days: 10 },
        buttonText: '10 days'
      }
    },
    editable: true,
    resourceAreaHeaderContent: 'Rooms',

    /*
    resources : 
    [
      {"id":"a","title":"Auditorium A"},
      {"id":"b","title":"Auditorium B","eventColor":"green"},
      {"id":"c","title":"Auditorium C","eventColor":"orange"},
      {"id":"d","title":"Auditorium D",
          "children":[
            {"id":"d1","title":"Room D1"},
            {"id":"d2","title":"Room D2"}
          ]
      },
      {"id":"e","title":"Auditorium E"},
      {"id":"f","title":"Auditorium F","eventColor":"red"},
      {"id":"g","title":"Auditorium G"},
      {"id":"h","title":"Auditorium H"},
      {"id":"i","title":"Auditorium I"},
      {"id":"j","title":"Auditorium J"},
      {"id":"k","title":"Auditorium K"},
      {"id":"l","title":"Auditorium L"},
      {"id":"m","title":"Auditorium M"},
      {"id":"n","title":"Auditorium N"},
      {"id":"o","title":"Auditorium O"},
      {"id":"p","title":"Auditorium P"},
      {"id":"q","title":"Auditorium Q"},
      {"id":"r","title":"Auditorium R"},
      {"id":"s","title":"Auditorium S"},
      {"id":"t","title":"Auditorium T"},
      {"id":"u","title":"Auditorium U"},
      {"id":"v","title":"Auditorium V"},
      {"id":"w","title":"Auditorium W"},
      {"id":"x","title":"Auditorium X"},
      {"id":"y","title":"Auditorium Y"},
      {"id":"z","title":"Auditorium Z"}
    ]
    */
    resources: 'https://fullcalendar.io/api/demo-feeds/resources.json?with-nesting&with-colors',
    events: 'https://fullcalendar.io/api/demo-feeds/events.json?single-day&for-resource-timeline'
  });

  calendar.render();
});