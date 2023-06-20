document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    timeZone: "UTC",
    titleFormat: function (date) {
      // title 설정
      return date.date.year + "년 " + (date.date.month + 1) + "월";
    },
    headerToolbar: {
      left: "today prev,next",
      center: "title",
      right:
        "resourceTimelineDay,resourceTimelineTenDay,resourceTimelineMonth,resourceTimelineYear",
    },
    initialView: "resourceTimelineDay",
    scrollTime: "08:00",
    aspectRatio: 1.5,
    views: {
      resourceTimelineDay: {
        buttonText: ":15 slots",
        slotDuration: "00:15",
      },
      resourceTimelineTenDay: {
        type: "resourceTimeline",
        duration: { days: 10 },
        buttonText: "10 days",
      },
    },
    editable: true,
    resourceAreaHeaderContent: "Rooms",

   
    // resources:
    //   "https://fullcalendar.io/api/demo-feeds/resources.json?with-nesting&with-colors",
    resources: resources,
    // events:
    //   "https://fullcalendar.io/api/demo-feeds/events.json?single-day&for-resource-timeline",
    events:
      "https://fullcalendar.io/api/demo-feeds/events.json?single-day&for-resource-timeline",
  });

  calendar.render();
});
