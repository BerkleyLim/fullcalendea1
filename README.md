# fullcalendea1

fullcalendar Javascript 기반으로 연습한다.

## fullcalendar 기능 정리

#### 캘린더 생성

```
var Calendar = FullCalendar.Calendar;
var calendarEl = document.getElementById('calendarWrap'); //캘린더 div
```

#### 캘린더 속성

```
var calProps = {
plugins : [ 'interaction', 'dayGrid' ] //월 캘린더

, header : { left  :''
    , center : 'title'
    , right : ''//'prevYear,prev,next,nextYear'
       }
//, locale : 'ko' // 한국어 설정이다. 하지만 date Cell 포맷팅이 어려우니 그냥 주석으로
, titleFormat : function(date) { // title 설정
  return date.date.year +"년 "+(date.date.month +1)+"월";
  }
, columnHeaderText : function(date) {
  return weekList[date.getDay()]; // 헤더 var weekList = ['일','월','화','수','목','금','토'];
    } , defaultDate : strToday // 기준일자
, editable : false
, eventLimit : true // allow "more" link when too many events
, height  : 'parent'
// , eventColor : '#5c6a96' // 이벤트 색상
, eventBorderColor : '#5c6a96'
, eventBackgroundColor : '#ffffff'
, events : eventData
, eventClick : fn_calEventClick // 이벤트 클릭 시
, dateClick : fn_calDateClick // 백그라운드 클릭시
, droppable : true // this allows things to be dropped onto the calendar
, drop : fn_calDrop  // 그리드에서 긁어올 때
// , eventAllow :function (dropInfo, draggedEvent) { //드롭 가능한 위치 설정
// , dropAccept : '.cool-event' // 긁어올 수 있는 draggable 설정
// , eventReceive : function (event, xhr) { debugger; return false;    } // drag 종료 시
// , eventOverlap: function(stillEvent, movingEvent) {debugger; return false;    } // 이벤트가 겹칠 때
// , eventSourceSuccess : function(content, xhr) {debugger; return false;    }
// , eventDragStop : function(stillEvent, movingEvent) {debugger; return false;    }
// , eventDrop  : function(stillEvent, movingEvent) {debugger; return false;    }
    };


calendarId = new FullCalendar.Calendar(calendarEl, calProps );
calendarId.render();
```

#### draggable 설정
```
// 드래거 New 를 계속 해주면 중복실행이 일어난다, 아래 코드는 한번만 실행하기

// 그리드 등 class 를 지정하여 드래그 가능하게 만들어준다
var Draggable = FullCalendarInteraction.Draggable;

var containerEl = document.getElementById('Grid1'); // 클래스의 상위 아이디
new Draggable(containerEl, {
itemSelector: '.dragCalendar', // 클래스
revert: true,
revertDuration: 0,
eventData: fn_calDrag
    });

```


#### 캘린더 함수 호출
```
var calendarId ; // new FullCalendar.Calendar(calendarEl, calProps ); 를 통해 생성한 캘린더 객체

// 캘린더 이벤트 업데이트 (id 지정해야 함)

var event = calendarId.getEventById(CAL_ID);
event._def.extendedProps = returnData; // 확장된 Prop
calendarId.rerenderEvents();


// 캘린더 이벤트 조회 
var eventList = calendarId.getEvents(); 


// 캘린더 기본값 지정. getEvents 시 가끔 deFault Date가 이동되어 고정 
calendarId.gotoDate(eventData); 


// 캘린더 삭제
calendarId.destroy(); // 이를 통해 삭제하면 선언이 충돌날 수 있다.


//캘린더 이벤트 전체 삭제
calendarId.removeAllEvents();


//캘린더 이벤트 추가
calendarId.addEvent(eventData);
calendarId.addEventSource(eventData)
```

#### 드래깅 관련
```
// 캘린더 드래그 시작 시

function fn_calDrag(eventEl){
  result.title = USER+'-'+DATA;  // 이벤트 타이틀
  result.create = false; //실제 생성은 하지 않음 => 요구조건이 생성은 드래깅 후 팝업창으로 
  return result;       
}
```